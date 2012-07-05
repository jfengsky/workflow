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
});