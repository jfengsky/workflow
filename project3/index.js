/*
 * 拍卖日历组件(非通用) Auction Calendar Component
 * Author: shidu.mj@taobao.com
 * Created in 2012-02-28
 */
KISSY.add('PaiCalendar', function(S, Indate, O){
  
  var $ = S.all, weeks = ['日','一','二','三','四','五','六'], today, fadeTimer;
  
  /*
   * @param el[id|elementObject] 日历组件外容器
   * @param d[array] 专场数据列表（格式：[{ name: 专场名称|string, desc: 简介|string, ym: 开始结束年月|string|YYYY-mm, dates: 活动日期|array[number], time: 起始时间|string|'hh:ii,hh:ii', url: 专场链接|string }]）
   */
  function Calendar(el, d){
    var $D = this.D = new Date();
    today = {y:$D.getFullYear(),m:$D.getMonth()+1,d:$D.getDate(),w:$D.getDay()};
    this.__wt = 0;
    this.__cm = [];
    this.El = $(el);
    this.Ds = d;
    this.ctd = null;
    this.init();
  }
  
  S.augment(Calendar, {
    /*
     * 初始化日历内容与交互操作
     * @param null
     */
    init: function(){
      this.indate = new Indate(this.El.parent().all('.J_pai_indate'));
      var popup = this.popup = new O({
        srcNode : this.El.all('.pai-calendar-month'),
        effect : { effect : "fade", duration : 0.5 }
      });
      popup.on("afterRenderUI", function() {
        popup.get("el").on("mouseenter", function() { clearTimeout(fadeTimer); });
        popup.get("el").on("mouseleave", function() { fadeTimer = setTimeout(function() { popup.hide(); }, 100); });
      });
      this.El.on('click', function(e){
        e = $(e.target);
        if(e.hasClass('pointer')) {
          switch(e.getDOMNode().tagName){
            case 'TD': this.changeCdate(0,0,e.html()); this.selectDate(); break;
            case 'LI': this.go(0,e.html()); popup.hide(); break;
            case 'B': this.changeMonth(e.hasClass('next')); break;
          }
        }
      }, this);
      this.El.parent().all('.pai-calendar-week').on('click', this.weekChangeHandler, this);
      this.El.on('mouseover', this.hoverDateElHandler, this).on('mouseout', this.hoverDateElHandler, this);
      this.El.parent().all('.pai-calendar-week').on('mouseover', this.hoverDateElHandler, this).on('mouseout', this.hoverDateElHandler, this);
      this.go(today.y, today.m, today.d);
      this.setWeeklyContent();
    },
    
    /*
     * 月份选择
     * @param y[number] 年份
     * @param m[number] 月份
     * @param d[number] 日
     */
    go: function(y,m,d){
      this.changeCdate(y,m,d);
      this.setTitle();
      this.attachCalendarHTML();
      this.selectDate();
    },
    
    /*
     * 在日历列表中操作并激活当前选中的日期
     * @param null
     */
    selectDate: function(){
      this.setCurrentDateEl(this.El.all('td')[this.setDailyContent()]);
    },
    
    /*
     * 相邻的月份跳转
     * @param isNext[boolean] 是否跳转到下一个，否则向前一个跳转
     */
    changeMonth: function(isNext){
      var cd = this.__cd, ds = this.Ds, yms = this.getAllMonth();
      var m = isNext?(cd.m+1):(cd.m-1), y = m<=12?(m>0?cd.y:(cd.y-1)):(cd.y+1);
      if(S.inArray(y+'-'+fillZero.call(m,2),yms)){
        this.go(y,m);
      }
    },
    
    /*
     * clicked时更改选中日期的Element状态样式
     * @param el[elementObject] 当前操作的Element
     */
    setCurrentDateEl: function(el){
      if(this.ctd) this.ctd.removeClass('current');
      (this.ctd = $(el)).addClass('current');
    },
    
    /*
     * hovered handler
     * @param e[eventObject] 当前hover的事件对象
     */
    hoverDateElHandler: function(e){
      var ismouseover = e.type=='mouseover', popup = this.popup;
      if($(e.target).hasClass('pointer')) {
        var h = 'hover';
        if($(e.target).parent()[0].nodeName=='H3') h = e.target.className.split(/\s/)[1]+'-'+h;
        $(e.target)[ismouseover?'addClass':'removeClass'](h);
      }
      if(e.target.tagName == 'I'){ /*当target element检测为I，则弹出月份选择菜单*/
        if(ismouseover){
          popup.set('align', {
            node : e.target,
            points : ["bl", "tl"],
            offset : [0, -1]
          });
          clearTimeout(fadeTimer);
          popup.show();
        }else{
          fadeTimer = setTimeout(function(){ popup.hide(); }, 100);
        }
      }
    },
    
    /*
     * 专场一周预告的翻页切换
     * @param e[eventObject] 当前click的事件对象
     */
    weekChangeHandler: function(e){
      if(e.target.tagName!='B') return;
      var wt = this.__wt, listEl, isNext, maxh;
      e = $(e.target);
      listEl = e.parent().parent().all('ul');
      isNext = e.hasClass('next');
      maxh = listEl.height();
      this.__wt = isNext?(wt-92+maxh>0?wt-92:wt):(wt+92>0?wt:wt+92);
      listEl.css('top',this.__wt);
    },
    
    /*
     * 获取当日的格式化对象
     * @return object {y:年|number,m:月|number,d:日|number}
     */
    getToday: function(){ return today; },
    
    /*
     * 获取当年所有月份
     * @return array [number]
     */
    getAllMonth: function(){
      var ret = [];
      S.each(this.Ds, function(v){ ret.push(v.ym); });
      return S.unique(ret);
    },
    
    /*
     * 获取当月所有日期
     * @return object {cdi:当日在数组中的位置|number,dd:当月日期列表(以星期作为边界)|array[null|number]}
     */
    getDates: function(){
      var $D = this.D, ret = this.__cm[0] = {cdi:0,dd:[]};
      var ttl, days, bday, eday, i, j;
      ret.cdi = $D.getDate();
      $D.setFullYear(this.__cd.y) && $D.setMonth(this.__cd.m) && $D.setDate(0);
      days = $D.getDate();
      $D.setDate(1) && (bday = $D.getDay());
      $D.setDate(days) && (eday = $D.getDay());
      ttl = days + bday + (6-eday);
      for(i=0, j=0; i<ttl; i++) ret.dd[i] = i<bday||j>days-1 ? null : ++j;
      ret.cdi += bday-1;
      return ret;
    },
    
    /*
     * 获取当月格式化后的专场数据
     * @return array [null|object]
     */
    getDatas: function(dte){
      var ret = this.__cm[1] = [], ym = this.__cd.y+'-'+fillZero.call(this.__cd.m,2);
      S.each(this.Ds, function(v){
        if(v.ym == ym) S.each(v.dates, function(d,p){
          if((p = S.indexOf(d, dte.dd)) > -1){
            if(!ret[p]) ret[p] = [];
            ret[p].push(v);
          }
        });
      });
      return ret;
    },
    
    /*
     * 写入日历元素表格
     */
    attachCalendarHTML: function(){
      var str = '<table cellspacing="0" cellpadding="0"><tr><th>'+weeks.join('</th><th>')+'</th></tr>',
          tmp = [], dte, dta, cd;
      cd = this.__cd;
      dta = this.getDatas(dte = this.getDates());
      S.each(dte.dd, function(v, i, n, s, c){
        c = [];
        c.push(!dta[i]?'kill pointer':'pointer');
        if(today.y==cd.y&&today.m==cd.m&&today.d==v) c.push('today');
        c = v ? ' class="'+c.join(' ')+'"' : null;
        if((n = i%7) == 0) tmp.push('<tr>');
        tmp.push('<td'+(c||'')+'>'+(v||'')+'</td>');
        if(n == 6) tmp.push('</tr>');
      });
      this.El.children('div').html(str + tmp.join('') + '</table>');
      str + tmp.join('') + '</table>';
      this.setCurrentDateEl(this.El.all('td')[dte.cdi]);
      dta = dte = tmp = null;
    },
    
    /*
     * 写入弹出的月份列表
     */
    setMonthList: function(){
      var mlist = this.popup.get('el'), yms = this.getAllMonth(), cd = this.__cd;
      S.each(mlist.all('li'), function(v){
        $(v).removeClass('pointer');
        if(S.inArray(cd.y+'-'+fillZero.call($(v).html(),2),yms)) $(v).addClass('pointer');;
      });
    },
    
    /*
     * 选择月份后更改表头的月份显示
     */
    setTitle: function(){
      this.El.children('h3').all('span').html(this.__cd.y);
      this.El.children('h3').all('i').html(fillZero.call(this.__cd.m,2)+'\u6708');
    },
    
    /*
     * 写入当前选中激活日期的专场列表
     * @return 当前日期于数组中的位置
     */
    setDailyContent: function(){
      var dta = this.__cm[1], cd = this.__cd, p = S.indexOf(cd.d, this.__cm[0].dd),
          listEl = this.indate.getEl(), tmp = [];
      if(dta[p]){
        S.each(dta[p], function(v,i,c,d,t){
          t = v.time.split(',');
          c = i < 3 ? ' class="'+(i>0?'minor':'top')+'"' : '';
          d = fillZero.call(cd.m,2)+'/'+fillZero.call(v.dates[0],2)+' '+t[0]+' - '+fillZero.call(cd.m,2)+'/'+fillZero.call(v.dates[v.dates.length-1],2)+' '+t[1];
          tmp.push('<li'+c+'><b>'+(i+1)+'</b><a href="'+v.url+'">'+v.name+'</a><p>'+d+'</p></li>');
        });
        listEl.html(tmp.join('')).show().prev().hide();
        this.indate.init();
      } else {
        listEl.hide().prev().show();
      }
      dta = cd = listEl = tmp = null;
      return p;
    },
    
    /*
     * 写入当月的专场列表
     */
    setWeeklyContent: function(){
      var $D = this.D, dta = this.__cm[1], p = this.__cm[0].cdi/7|0,
          listEl = this.El.parent().all('.J_pai_inweek').all('ul'), ret = [], tmp = [];
      S.each(dta, function(v,i){ if(v && (i/7|0) == p) ret = ret.concat(v); });
      ret = S.unique(ret);
      S.each(ret, function(v, w){
        if(p = S.filter(v.dates,function(k){return k>=today.d;})[0]){
          $D.setDate(p) && (w = $D.getDay());
          tmp.push('<li><span>周'+weeks[w]+'<br/><strong>'+p+'</strong></span>');
          tmp.push('<p><a href="'+v.url+'" class="pai-calendar-week-list">['+v.name+']</a> <a href="'+v.url+'">'+v.desc+'</a></p></li>');
        }
      });
      if(tmp.length){
        listEl.html(tmp.join(''));
        listEl.parent().show().prev().hide();
      } else {
        listEl.parent().hide().prev().show();
      }
      $D.setDate(this.__cd.d);
    },
    
    /*
     * 更改选中日期记录
     */
    changeCdate: function(y,m,d){
      var cd = this.__cd, oy = cd && cd.y;
      this.__cd = {
        y: +y||cd.y,
        m: +m||cd.m,
        d: +d||cd.d
      }
      if(this.__cd.y != oy) this.setMonthList();
    }
  });
  
  function fillZero(fillcount, dir){
    var s = String(Math.pow(10,fillcount)).substr(2);
    s = dir!=1?s+this.toString():this.toString()+s;
    return s.length > fillcount ? s.substr(s.length-fillcount) : s;
  }
    
  return Calendar;
  
},{
  requires: ['PaiCalendarIndate','overlay']
});

KISSY.add('PaiCalendarIndate', function(S){
  var $ = S.all;
  /*
   * 当日专题列表切换Tab
   * @param el 专场列表容器
   */
  function Indate(el){
    this.listEl = $(el);
    this.isActived = 0;
    this.currentEl = null;
    this.listEl.on('mouseover', function(e, el){
      switch(e.target.tagName){
        case 'LI': el = $(e.target); break;
        case 'A':case 'B':case 'P': el = $(e.target).parent(); break;
      }
      if(el) {this.setCurrent(el);}
    },this);
    this.listEl.parent().on('mouseenter', this.listEventHandler, this).on('mouseleave', this.listEventHandler, this);
  }
  S.augment(Indate, {
    init: function(){
      this.setCurrent(this.listEl.all('li')[0]);
    },
    getEl: function(){
      return this.listEl;
    },
    listEventHandler: function(el){
      el = this.listEl.parent();
      this.isActived = this.isActived ? (el.css('overflow', 'hidden')&&0) : (el.css('overflow', 'visible')&&1);
      if(!this.isActived) this.setCurrent(el.all('li')[0]);
    },
    setCurrent: function(el){
      if(this.currentEl) this.currentEl.removeClass('current');
      this.currentEl = $(el);
      this.currentEl.addClass('current');
    }
  });
  return Indate;
});
/**
 * Created by IntelliJ IDEA.
 * User: wb-jiangfeng
 * Date: 12-3-1
 * Time: 下午4:05
 * 明日预告
 */

KISSY.add('PaiComming',function(S, Switchable){
    return function(){
        var s = new Switchable.Slide('#J_comming', {
            effect : 'scrolly',
            easing : 'easeOutStrong'
        });
    }
},{requires:['switchable']});
/*
 * 倒计时组件 Auction CountDown Component
 * Author: shidu.mj@taobao.com
 * Created in 2011-12-28
 */
KISSY.add("Countdown", function(S, $) {
  
  $ = S.all;
  
  function Countdown(cfg) {
    this.fm = cfg.format||"d,h,i,s";
    this.el = $(cfg.element);
    this.onProcess = cfg.onProcess || null;
    this.setLeftTime(cfg.leftTime);
    this.init();
  }


  S.augment(Countdown, {
    init : function() {
      var t = this, tf = t.fm.split(','), el = t.el, fld;
      fld = t.fields = {};
      el[0] && S.each(el[0].getElementsByTagName('var'), function(v, i) { fld[tf[i]] = $(v); });
      this.timer = accurateInterval(function() {
        t.onProcess && t.onProcess(t.lt);
        t.render();
        t.subtractLeftTime();
      }, 1000, {}, true);
    },
    render : function() {
      var lt = this.lt;
      if(lt >= 0) {
        S.each(this.fields, function(item, k) {
          item.html(getTimevalByFiled(k, lt));
        });
      }
    },
    setLeftTime : function(n) {
      this.lt = n / 1000 | 0;
    },
    subtractLeftTime : function() {
      this.lt && this.lt--;
    },
    destroy: function(){
        this.timer && clearTimeout(this.timer);
        this.el = this.onProcess = this.timer = null;
    }
  });
  
  function accurateInterval(fn, INTERVAL, handler, runAsap) {
    var start = new Date().getTime(), time = runAsap ? 0 : INTERVAL;
    if( typeof handler !== 'object') handler = {};
    runAsap ? _interval() : (handler.timer = window.setTimeout(_interval, INTERVAL));
    function _interval() {
      var latency;
      if(fn() === false) return;
      time += INTERVAL;
      latency = time + start - new Date().getTime();
      handler.timer = window.setTimeout(arguments.callee, latency);
    }
    return handler.timer;
  }
  function getTimevalByFiled(k, ms) {
    switch(k) {
      case 'd': return ms / 86400 | 0;
      case 'h': return zerofill(ms / 3600 % 24 | 0);
      case 'i': return zerofill(ms % 3600 / 60 | 0);
      case 's': return zerofill(ms % 3600 % 60);
    }
    return 0;
  }
  function zerofill(n) {
    return ( n = ('00' + n)).slice(-2, n.length);
  }

  return Countdown;
});/**
 * Created by IntelliJ IDEA.
 * User: wb-jiangfeng
 * Date: 12-3-1
 * Time: 上午10:31
 * 轮播焦点图
 */

KISSY.add('PaiFocus',function(S, Switchable){
    return function(){
        var s = new Switchable.Slide('#J_Slide', {
            effect : 'scrollx',
            easing : 'easeOutStrong'
        });
    }
},{requires:['switchable']});/**
 * Created by IntelliJ IDEA.
 * User: wb-jiangfeng
 * Date: 12-3-6
 * Time: 下午2:06
 * 首页人气拍品
 */

KISSY.add('PaiHot',function(S, D, IO, cnd){
    return function(){
        var url = 'http://paimai.taobao.com/json/get_hotest_auction';  //人气拍接口

        function dataShow(data){
            //取前5个 其实就返回5个
            var html = '';
            S.each(data,function(item){
                var title = item.title;
                if(title.length > 10){
                    title = title.substr(0,10);
                }
                html += '<li class="hot-item">' +
                    '<a class="pic" href="http://detail.taobao.com/item.htm?id=' + item.itemId + '" target="_blank">' +
                    '<img src="' + item.picUrl + '_120x120.jpg" alt="">' +
                    '</a>' +
                    '<a href="http://detail.taobao.com/item.htm?id=' + item.itemId + '" class="title" target="_blank">' + title + '</a>' +
                    '<div class="sau">' +
                    '<div class="current">' +
                    '<span class="label">当前价格</span>: ' +
                    '<span class="price">' +
                    '<em class="rmb">&yen;</em>' +
                    '<em class="J_CurrentPrice">' + item.currentPrice + '</em>' +
                    '</span>' +
                    '</div>' +
                    '<div class="bidCount">' +
                    '<span class="label">出价次数</span>: ' +
                    '<span><em class="J_AuctionCount">' + item.totalCnt + '</em>次</span>' +
                    //'<span><em class="J_AuctionCount">' + item.totalCnt + '</em>次</span>' +
                    '</div>' +
                    '</div>' +
                    '</li>';
            });
            D.html('#J_hot',html);
        }

        function jsonpCallback(url,fn){
            IO({
                dataType : 'jsonp',
                url: url,
                data:{
                    t : new Date().getTime()
                },
                jsonpCallback : 'hot',
                success : function(data){
                    fn(data);
                }
            });
        };

        jsonpCallback(url,jsonShow);

        function jsonShow(data){
            dataShow(data);
            S.each(data,function(item, i){
                var id = item.itemId;
                var left_time = item.leftTime;

                var c = new cnd({
                    format: 'h,i,s',
                    leftTime: left_time,
                    onProcess: function(n){
                        if(!i && n <= 0 ){
                            c.destroy();
                            c = null;
                            jsonpCallback(url,jsonShow);
                        }
                    }
                });
            });
        }
    }
},{requires:['dom','ajax','Countdown']});/**
 * @fileoverview 即将结束js
 * @author 易敛<yilian.wj@taobao.com>
 * @date 12-2-24
 */

KISSY.add('PaiLast',function(S, D, E, IO, cnd, Switchable){

    function PaiLast(){

        var url = 'http://paimai.taobao.com/json/get_ending_auction'; //即将结束接口 110.75.25.209

        //渲染数据
        function dataShow(data){
            var html = '';
            var tpl = '';
            S.each(data,function(item,num){
                //前10个写入右侧
                var title = title1 = item.title;
                if(title.length > 10){
                    title = title.substr(0,10);
                }
                if(title1.length > 13){
                    title1 = title1.substr(0,13);
                }
                if(num < 10){
                    html += '<li class="last-item" id="' + item.itemId + '">' +
                        '<a class="pic" href="http://detail.taobao.com/item.htm?id=' + item.itemId + '" target="_blank">' +
                        '<img src="' + item.picUrl + '_120x120.jpg" alt="">' +
                        '</a>' +
                        '<a href="" class="title" target="_blank">' + title + '</a>' +
                        '<div class="price">' +
                        '<em class="rmb">&yen</em>' +
                        '<em class="J_CurrentPrice">' + item.currentPrice + '</em>' +
                        '</div>' +
                        '<div class="time">' +
                        '<s class="big-clock"></s>' +
                        '<span class="J_time">' +
                        '<var>00</var>:' +
                        '<var>00</var>:' +
                        '<var>00</var>' +
                        '</span>' +
                        '</div>' +
                        '</li>';
                }else if(num >= 10){
                    tpl += '<li class="more-item" id=' + item.itemId + '>' +
                        '<a class="name" href="http://detail.taobao.com/item.htm?id=' + item.itemId + '">' + title1 + '</a>' +
                        '<div class="sau">' +
                        '<span class="time">' +
                        '<s class="small-clock"></s>' +
                        '<b class="J_time">' +
                        '<var>00</var>:' +
                        '<var>00</var>:' +
                        '<var>00</var>' +
                        '</b>' +
                        '</span>' +
                        '<span class="price">' +
                        '<em class="rmb">&yen;</em>' +
                        '<strong>' + item.currentPrice + '</strong>' +
                        '</span>' +
                        '</div>' +
                        '</li>';
                }
            });
            D.css('#J_lastleft','top','0');
            D.html('#J_lastright',html);
            D.html('#J_lastleft',tpl);
        }

        function jsonpCallback(url,fn){
            IO({
                dataType : 'jsonp',
                url: url,
                data:{
                  t : new Date().getTime()
                },
                jsonpCallback : 'end',
                success : function(data){
                    fn(data);
                }
            });
        };

        jsonpCallback(url,jsonShow);

        function jsonShow(data){
            dataShow(data);
            //console.log(data);
            //竞拍倒计时
            S.each(data,function(item, i){
                var id = item.itemId;
                var left_time = item.leftTime;

                var c = new cnd({
                    element: '#' + id + ' .J_time',
                    format: 'h,i,s',
                    leftTime: left_time,
                    onProcess: function(n){
                        if(!i && n <= 0 ){
                            s.stop();
                            c.destroy();
                            c = null;

                           D.html("#J_lastleft",'');
                            jsonpCallback(url,jsonShow);
                        }
                    }
                });
            });

            var CON_MORE = '#J_MoreCon', EL_MORE_LIST = 'more-con';
            var Slide = Switchable.Slide;
            var s = Slide(CON_MORE,{
                contentCls : EL_MORE_LIST,
                hasTriggers : false,
                effect : 'scrolly',
                easing: 'easeOutStrong',
                interval: 2,
                duration: .2
            });

        }

        /* 建立长链接 跟新商品信息 */

            //获取需要更新的商品id
            var long_ids = [],long_temp_ids = [];
            var recom_ids = S.query('#J_recom .pai-recommend-item');
            S.each(recom_ids,function(item,n){
                long_ids[n] = D.attr(item,'id');
            });
            var limit_ids = S.query('#J_limcon .pai-limit-item');
            S.each(limit_ids,function(item,n){
                long_temp_ids[n] = D.attr(item,'id');
            });
            long_ids = long_ids.concat(long_temp_ids);
            //console.log(long_ids);
            window.g_config = {appId:1009,itemId: long_ids};
            function updateSAU(data) {
                if(data == undefined) return;   //没有更新则返回
                //console.log(data);
                //根据id更新价格和出价次数
                var item_id = data.itemId;
                var price = data.price;
                var counts = data.totalCnt;
                D.html('#' + item_id + ' .lp',price);
                D.html('#' + item_id + ' .lc',counts);
            }
            var longlivedURL = 'http://a.tbcdn.cn/p/tstart/1.0/build/tb-mpp-min.js?t=20110920.js';
            S.getScript(longlivedURL, function() {
                if (!g_config) return;
               Mpp.Notify.register({appId:g_config.appId, type:1, callback:updateSAU});
            });

    }
     return PaiLast;
},{requires:['dom','event','ajax','Countdown','switchable']});/**
 *
 * 限时拍
 *
 */



KISSY.add('PaiLimit',function(S, D, E, IO, cnd){
    return function(){
        var url = 'http://paimai.taobao.com/json/get_sau.htm';

        //获取商品ID
        var ids = S.query('#J_limcon .pai-limit-item');
        //var now_price = S.query('#J_limcon .limit_price');  //当前价格
        var now_num = S.query('#J_limcon .limit_num');  //出价次数

        var item_id = '';
        S.each(ids,function(item, num){
            var temp_id = D.attr(ids[num],'id');
            item_id = item_id + ',' + temp_id;
        });
        item_id = item_id.substring(1,item_id.length);
        //请求数据

        /**
         *  按钮状态函数
         *  所有按钮默认为即将竞拍
         *  0：即将竞拍
         *  1：开始竞拍
         *  2：竞拍结束
         */
        function btnType(id, el){
            if(el == 1){
                D.addClass('#' + id + ' a.wil','auc');
                D.removeClass('#' + id + ' a.auc','wil');
            }else if(el == 2){
                D.addClass('#' + id + ' a.wil','fih');
                D.removeClass('#' + id + ' a.fih','wil');
                D.addClass('#' + id + ' a.auc','fih');
                D.removeClass('#' + id + ' a.fih','auc');
            };
        }

        //竞拍已经结束 修改文字和时间
        function hasFinish(id,el){
            //修改 “剩余时间” 为 “结束时间”
            D.html('#' + id + ' .J_end','结束时间');
           // console.log('结束时间');
            var date = new Date();
            date.setTime(el);
            var time = date.toLocaleTimeString();
            D.html('#' + id + ' .J_limitTime',time);
        }

        var state = 0; //拍卖状态 0：结束  1：即将竞拍 2：正在竞拍
        /**
         *
         *  @param st   state 拍卖状态 0：结束  1：即将竞拍 2：正在竞拍
         *  @param id   商品ID
         *  @param el   结束时间 即将竞拍
         *  @param ed   结束时间 即将结束，正在竞拍的商品为 0
         */

        function timeShow(st, id, el, ed, fd){
            new cnd({
                element: '#' + id + ' .J_limitTime',
                format: 'h,i,s',
                leftTime: el,
                onProcess: function(n){
                    if(st && n <= 0){
                        if(st == 1){
                            //console.log('切换到正在竞拍倒计时');
                            st = 2;  //修改状态，以后不执行这个if
                            if(ed != 0){    //如果有竞拍结束
                                this.setLeftTime(ed);
                            }
                            //修改按钮状态
                            btnType(id, 1);
                        }else if(st == 2){
                            //console.log('竞拍结束了');
                            st = 0;
                            btnType(id, 2); //修改按钮状态
                            D.remove('#' + id + ' .ms');    //移除毫秒倒计时
                            hasFinish(id,fd);
                        }
                    }
                }
            });
            //添加毫秒倒计时图片
            var ms_img = '<img src="http://img03.taobaocdn.com/tps/i3/T1MEKYXg4gXXXXXXXX-8-9.gif">';
            D.html('#' + id + ' .ms',ms_img);
        }



        IO({
            dataType : 'jsonp',
            url : url,
            data : {
                itemIds:item_id
            },
            jsonpCallback : 'limitback',
            success : function(data){
                /** 返回的参数
                 *  currentPrice : 当前价格
                 *  leftTime : 剩余时间(距离结束)
                 *  itemId
                 *  timeToStart ： 剩余时间(距离开拍)
                 *  totalCnt ： 出价次数
                 */
                S.each(data,function(item){

                    //开拍状态判断
                    var start_time = item.timeToStart; //剩余时间(距离开拍)
                    var end_time = item.leftTime; //剩余时间(距离结束)
                    var finish_time = item.end; //具体结束时间
                    var ID = item.itemId;

                    //修改当前价格和出价次数
                    D.html('#' + ID + ' .limit_price',item.currentPrice);
                    D.html('#' + ID + ' .limit_num',item.totalCnt);

                    //开拍状态判断
                    if(start_time >= 0){    //即将开始
                        //console.log('即将开始');
                        state = 1;
                        show_time = start_time;
                        timeShow(state, ID, show_time, end_time,finish_time);
                    }else if(end_time <= 0){ //已经结束
                        //console.log('已经结束');
                        D.addClass('#' + item.itemId + ' a.wil','fih');
                        D.removeClass('#' + item.itemId + ' a.fih','wil');
                        hasFinish(item.itemId,item.end);
                    }else if(start_time < 0 && end_time > 0){
                        //console.log('正在拍');
                        btnType(ID, 1);    //修改按钮状态
                        state = 2;
                        show_time = end_time;
                        timeShow(state, ID, show_time, 0,finish_time);
                    }

                });
            }
        });



        var time_line = S.query('#J_limit li');
        var limit_content = S.query('#J_limcon .ks-switchable-content');
        var now_time = 0; //当前正在拍卖的li

        /** 根据服务器时间返回值 now_time
         *  10:00~13:00 返回 0
         *  13:00~16:00 返回 1
         *  16:00~19:00 返回 2
         *  默认为-1
         */
        function time_back(el){
            el = (el = new Date()) && el.getHours();
            now_time = el < 19 ? (el < 16 ? (el < 13 ? 0 : 1): 2) : 3;
            /*if(el >= 13 && el < 16){
                now_time = 1
            }else if(el >= 16 && el < 19){
                now_time = 2
            };*/

            return now_time;
        }


        /**
         *   时间线上的样式说明：
         *   nw:当前正在拍卖状态
         *   nv:即将开拍的hover状态
         *   na:选中未开拍状态
         *   ns:选中未开拍状态的当前正在拍卖状态
         *   np:未开拍或已结束下的鼠标hover状态
         */

        //清除时间线上的开拍状态 隐藏所有内容区
        function clearTime(){
            S.each(time_line,function(item){
                D.removeClass(item,'nv');
                D.removeClass(item,'na');
            });

        }
        function clearCont(){
            S.each(limit_content,function(item){
                D.hide(item);
            });
        }

        //取得时间线序号
        function timeNum(ev){
            var num = D.text(ev.target);
            return num;
        }

        //鼠标hover效果
        E.on(time_line,'mouseenter mouseleave',function(ev){
            if(ev.type == 'mouseenter'){
                if(D.hasClass(ev.target,'ns')){ //如果当前时间是未选中
                    D.removeClass(ev.target,'nw');
                    D.removeClass(ev.target,'ns');
                    D.addClass(ev.target,'np');
                }else{
                    D.addClass(ev.target,'nv');
                    D.removeClass(ev.target,'ns');
                }

            };
            if(ev.type == 'mouseleave'){
                if(D.hasClass(ev.target,'np')){
                    D.removeClass(ev.target,'np');
                    D.addClass(ev.target,'ns');
                }else{
                    D.removeClass(ev.target,'nv');
                }
            }
        });

        //点击效果
        E.on(time_line,'click',function(ev){
            clearTime();
            clearCont();
            if(D.hasClass(ev.target,'np')){
                D.addClass(ev.target,'nw');
            }
            if(D.hasClass(ev.target,'nw')){
                D.removeClass(ev.target,'ns');
                D.addClass(ev.target,'nw');
            }else{
                D.addClass(ev.target,'na');
                D.addClass(time_line[line_show],'ns');
            };
            E.on(time_line,'mouseleave',function(ev){
                if(D.hasClass(ev.target,'nw')){
                    D.removeClass(ev.target,'ns');
                }
            });
            var num = timeNum(ev) - 0;  //ie6 不能把string字符串变成number
            clearCont();    //隐藏所有容器
            D.show(limit_content[num]); //显示相应容器
        })

        //获取服务器当前时间 这里用本机时间测试
        //var now_date = new Date();
        //var now_hours = now_date.getHours();
        var now_hours = D.val('#J_NowTime');

        //var now_hours = D.val('#date_time');
        //console.log(now_hours);
        var line_show = time_back(now_hours);
        D.addClass(time_line[line_show],'nw');
        clearCont();
        D.show(limit_content[line_show]);

        //如果拍卖没有开始或已经结束，则显示第一个tab
    };
},{requires:['dom','event','ajax','Countdown']});
/**
 * Created by IntelliJ IDEA.
 * User: wb-jiangfeng
 * Date: 12-3-5
 * Time: 下午2:55
 * 焦点图下面推荐拍卖商品
 */

KISSY.add('PaiRecommend',function(S, D, IO, cnd){
    return function(){
        //获取商品ID
        var ids = S.query('#J_recom .pai-recommend-item');
        //var now_price = S.query('#J_recom .recom_price');
        var url = 'http://paimai.taobao.com/json/get_sau.htm';  //通用接口
        //var url = 'http://paimai.taobao.com/json/get_ending_auction.htm'; //人气拍接口
        var item_id = '';

        S.each(ids,function(item, num){
            var temp_id = D.attr(ids[num],'id');
            item_id = item_id + ',' + temp_id;
        });
        item_id=item_id.substring(1,item_id.length);

        /**
         *  按钮状态函数
         *  所有按钮默认为即将竞拍
         *  0：即将竞拍
         *  1：开始竞拍
         *  2：竞拍结束
         */
        function btnType(id, el){
            if(el == 1){
                D.addClass('#' + id + ' a.wil','auc');
                D.removeClass('#' + id + ' a.auc','wil');
            }else if(el == 2){
                D.addClass('#' + id + ' a.wil','fih');
                D.removeClass('#' + id + ' a.fih','wil');
                D.addClass('#' + id + ' a.auc','fih');
                D.removeClass('#' + id + ' a.fih','auc');
            };
        }

        var state = 0; //拍卖状态 0：结束  1：即将竞拍 2：正在竞拍
        /**
         *
         *  @param st   state 拍卖状态 0：结束  1：即将竞拍 2：正在竞拍
         *  @param id   商品ID
         *  @param el   结束时间 即将竞拍
         *  @param ed   结束时间 即将结束，正在竞拍的商品为 0
         */

        function timeShow(st, id, el, ed){
            new cnd({
                element: '#' + id + ' .J_recomTime',
                format: 'd,h,i,s',
                leftTime: el,
                onProcess: function(n){
                    if(st && n <= 0){
                        if(st == 1){
                            //console.log('切换到正在竞拍倒计时');
                            st = 2;  //修改状态，以后不执行这个if
                            if(ed != 0){    //如果有竞拍结束
                                this.setLeftTime(ed);
                            }
                            //修改按钮状态
                            btnType(id, 1);
                        }else if(st == 2){
                            //console.log('竞拍结束了');
                            st = 0;
                            btnType(id, 2); //修改按钮状态
                            D.remove('#' + id + ' .ms');    //移除毫秒倒计时
                        }
                    }
                }

            });
            //添加毫秒倒计时图片
            var ms_img = '<img src="http://img02.taobaocdn.com/tps/i2/T1wcOZXglXXXXXXXXX-8-9.gif">';
            D.html('#' + id + ' .ms',ms_img);
        }


        IO({
            dataType : 'jsonp',
            url : url,
            data : {
                itemIds:item_id
            },
            jsonpCallback : 'recomback',
            success : function(data){
                /** 返回的参数
                 *  currentPrice : 当前价格
                 *  leftTime : 剩余时间(距离结束)
                 *  itemId
                 *  timeToStart ： 剩余时间(距离开拍)
                 */

                S.each(data,function(item){
                    var start_time = item.timeToStart; //剩余时间(距离开拍)
                    var end_time = item.leftTime; //剩余时间(距离结束)
                    var show_time = 0; //临时倒计时参数
                    var ID = item.itemId; //商品ID

                    //修改当前价格
                    D.html('#' + ID + ' .recom_price',item.currentPrice);

                    //开拍状态判断
                    if(start_time >= 0){    //即将开始
                        //console.log('即将开始');
                        state = 1;
                        show_time = start_time;
                        timeShow(state, ID, show_time, end_time);
                    }else if(end_time <= 0){ //已经结束
                        //console.log('已经结束');
                        D.addClass('#' + item.itemId + ' a.wil','fih');
                        D.removeClass('#' + item.itemId + ' a.fih','wil');
                    }else if(start_time < 0 && end_time > 0){
                        //console.log('正在拍');
                        btnType(ID, 1);    //修改按钮状态
                        state = 2;
                        show_time = end_time;
                        timeShow(state, ID, show_time, 0);
                        //距离结束倒计时
                    }
                });
            }
        });
    };
},{requires:['dom','ajax','Countdown']});