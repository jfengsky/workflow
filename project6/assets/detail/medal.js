/**
 * detail页面 勋章显示
 * @Author: wb-jiangfeng
 * @Time: 12-10-24 15:56
 */
KISSY.add(function(S, D, E) {
  var medal = {};
  medal._url = D.val('#J_medalUrl');
  medal._tag = true;
  medal._tpl = D.create('<div class="c2b-medal" style="display:none" id="J_c2bMedal">' +
      '<div class="medal-img"></div>' +
      '<div class="medal-info">' +
        '<b>合买达人勋章</b>' +
        '<p>发起合买成功之后即可领取合买达人勋章</p>' +
        '<a href="' + medal._url + '" target="_blank" class="rt">了解更多></a>' +
      '</div>' +
    '</div>');
  medal._show = function(){
    if(medal._tag){
      D.append(medal._tpl, '#J_leader');
      medal._tag = false;
    }
    D.show('#J_c2bMedal');
  };
  medal._hide = function(){
    S.later(function(){
      D.hide('#J_c2bMedal');
    },1500);
  };
  E.delegate(document, 'mouseenter', '#J_medal', medal._show);
  E.delegate(document, 'mouseleave', '#J_c2bMedal', medal._hide);
}, {
    requires: ['dom', 'event']
});