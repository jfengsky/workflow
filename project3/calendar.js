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
