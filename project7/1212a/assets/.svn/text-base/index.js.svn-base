/**
 * 有球必应 1212活动首页js配置
 * @author: jfeng(wb-jiangfeng@taobao.com)
 * @time: 2012-11-15 18:51
 */

KISSY.add(function(S, D, E, UA, Balloon) {
  //alert(111);
   //RoundRect.render('.circle');
  // 美妆
  var meizhuang = new Balloon('#J_mz', 10, 50, 15);
  meizhuang.moving();

  // 数码
  var shuma = new Balloon('#J_c3', 20, 40, 15);
  shuma.moving();

  // 母婴
  var baby = new Balloon('#J_baby', 20, 50, 15);
  baby.moving();

  // 家电
  var jiadian = new Balloon('#J_jiadian', 20, 50, 15);
  jiadian.moving();

  // 百货 
  var baihuo = new Balloon('#J_baihuo', 10, 30, 12);
  baihuo.moving();

  // 家居
  var jiaju = new Balloon('#J_jia', 20, 50, 15);
  jiaju.moving();

  // 服装
  var clothes = new Balloon('#J_clothes', 15, 50, 25);
  clothes.moving();

  // 户外运动
  var sport = new Balloon('#J_sport', 10, 40, 15);
  sport.moving();

  //其它小圆
  var oa = new Balloon('#J_othera', 10, 30, 10);
  oa.moving();
  var ob = new Balloon('#J_otherb', 30, 40, 20);
  ob.moving();
  var oc = new Balloon('#J_otherc', 10, 30, 10);
  oc.moving();

  // 加载分享js
  // var Accordion = Switchable.Accordion;
  //   window.accordion = Accordion('#J_accordion',{
  //   multiple: true,
  //   hasTriggers:false
  //   //triggerType:'mouse'
  //   //autoplay:true,
  //   //switchTo:0
  //   //'activeTriggerCls': 'collapse'
  // });
  
  if(UA.ie <= 6){
    E.on('#J_accordion .ks-switchable-triger', 'mouseenter mouseleave',function(ev){
      var nexttab = D.next(this);
      if(ev.type == 'mouseenter'){
        D.show(nexttab);
      }
      if(ev.type == 'mouseleave'){
        D.hide(nexttab);
      }
    });
    E.on('#J_accordion .ks-switchable-panel', 'mouseenter mouseleave',function(ev){
      if(ev.type == 'mouseenter'){
        D.show(this);
      }
      if(ev.type == 'mouseleave'){
        D.hide(this);
      }
    });
  }


  S.getScript('http://a.tbcdn.cn/p/snsdk/core.js',{charset:'utf-8'});
}, {
    //requires: ['dom','switchable','assets/index/balloon']
    requires: ['dom','event','ua','assets/index/balloon']
});