/*
 * �����������(��ͨ��) Auction Calendar Component
 * Author: shidu.mj@taobao.com
 * Created in 2012-02-28
 */
KISSY.add('PaiCalendar', function(S, Indate, O){
  
  var $ = S.all, weeks = ['��','һ','��','��','��','��','��'], today, fadeTimer;
  
  /*
   * @param el[id|elementObject] �������������
   * @param d[array] ר�������б���ʽ��[{ name: ר������|string, desc: ���|string, ym: ��ʼ��������|string|YYYY-mm, dates: �����|array[number], time: ��ʼʱ��|string|'hh:ii,hh:ii', url: ר������|string }]��
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
     * ��ʼ�����������뽻������
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
     * �·�ѡ��
     * @param y[number] ���
     * @param m[number] �·�
     * @param d[number] ��
     */
    go: function(y,m,d){
      this.changeCdate(y,m,d);
      this.setTitle();
      this.attachCalendarHTML();
      this.selectDate();
    },
    
    /*
     * �������б��в��������ǰѡ�е�����
     * @param null
     */
    selectDate: function(){
      this.setCurrentDateEl(this.El.all('td')[this.setDailyContent()]);
    },
    
    /*
     * ���ڵ��·���ת
     * @param isNext[boolean] �Ƿ���ת����һ����������ǰһ����ת
     */
    changeMonth: function(isNext){
      var cd = this.__cd, ds = this.Ds, yms = this.getAllMonth();
      var m = isNext?(cd.m+1):(cd.m-1), y = m<=12?(m>0?cd.y:(cd.y-1)):(cd.y+1);
      if(S.inArray(y+'-'+fillZero.call(m,2),yms)){
        this.go(y,m);
      }
    },
    
    /*
     * clickedʱ����ѡ�����ڵ�Element״̬��ʽ
     * @param el[elementObject] ��ǰ������Element
     */
    setCurrentDateEl: function(el){
      if(this.ctd) this.ctd.removeClass('current');
      (this.ctd = $(el)).addClass('current');
    },
    
    /*
     * hovered handler
     * @param e[eventObject] ��ǰhover���¼�����
     */
    hoverDateElHandler: function(e){
      var ismouseover = e.type=='mouseover', popup = this.popup;
      if($(e.target).hasClass('pointer')) {
        var h = 'hover';
        if($(e.target).parent()[0].nodeName=='H3') h = e.target.className.split(/\s/)[1]+'-'+h;
        $(e.target)[ismouseover?'addClass':'removeClass'](h);
      }
      if(e.target.tagName == 'I'){ /*��target element���ΪI���򵯳��·�ѡ��˵�*/
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
     * ר��һ��Ԥ��ķ�ҳ�л�
     * @param e[eventObject] ��ǰclick���¼�����
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
     * ��ȡ���յĸ�ʽ������
     * @return object {y:��|number,m:��|number,d:��|number}
     */
    getToday: function(){ return today; },
    
    /*
     * ��ȡ���������·�
     * @return array [number]
     */
    getAllMonth: function(){
      var ret = [];
      S.each(this.Ds, function(v){ ret.push(v.ym); });
      return S.unique(ret);
    },
    
    /*
     * ��ȡ������������
     * @return object {cdi:�����������е�λ��|number,dd:���������б�(��������Ϊ�߽�)|array[null|number]}
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
     * ��ȡ���¸�ʽ�����ר������
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
     * д������Ԫ�ر��
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
     * д�뵯�����·��б�
     */
    setMonthList: function(){
      var mlist = this.popup.get('el'), yms = this.getAllMonth(), cd = this.__cd;
      S.each(mlist.all('li'), function(v){
        $(v).removeClass('pointer');
        if(S.inArray(cd.y+'-'+fillZero.call($(v).html(),2),yms)) $(v).addClass('pointer');;
      });
    },
    
    /*
     * ѡ���·ݺ���ı�ͷ���·���ʾ
     */
    setTitle: function(){
      this.El.children('h3').all('span').html(this.__cd.y);
      this.El.children('h3').all('i').html(fillZero.call(this.__cd.m,2)+'\u6708');
    },
    
    /*
     * д�뵱ǰѡ�м������ڵ�ר���б�
     * @return ��ǰ�����������е�λ��
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
     * д�뵱�µ�ר���б�
     */
    setWeeklyContent: function(){
      var $D = this.D, dta = this.__cm[1], p = this.__cm[0].cdi/7|0,
          listEl = this.El.parent().all('.J_pai_inweek').all('ul'), ret = [], tmp = [];
      S.each(dta, function(v,i){ if(v && (i/7|0) == p) ret = ret.concat(v); });
      ret = S.unique(ret);
      S.each(ret, function(v, w){
        if(p = S.filter(v.dates,function(k){return k>=today.d;})[0]){
          $D.setDate(p) && (w = $D.getDay());
          tmp.push('<li><span>��'+weeks[w]+'<br/><strong>'+p+'</strong></span>');
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
     * ����ѡ�����ڼ�¼
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
   * ����ר���б��л�Tab
   * @param el ר���б�����
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
