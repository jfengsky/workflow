/**
 * detail页面 商品大图切换 取消跟单 立即购买
 * @Author: wb-jiangfeng
 * @Time: 12-10-24 15:56
 */
KISSY.add(function(S, E, Switchable) {
  var Tabs = Switchable.Tabs,
      tabs = new Tabs('#J_c2bitemPic', {
    switchTo : 0
  });

  // 取消跟单
  E.on('#J_bidcancel','click',function(){
    S.get('#J_cancelGroup').submit();
  });

  // 立即购买
  E.on('#J_bidnow','click',function(){
    S.get('#J_groupBuy').submit();
  });

}, {
    requires: ['event','switchable']
});