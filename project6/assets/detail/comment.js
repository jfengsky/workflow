/**
 * 评论组件
 * @Author: wb-jiangfeng
 * @Time: 12-6-18 下午3:21
 *
 */
KISSY.add(function(S, D, P) {
  var comts = {
    _tag: D.val('#J_isFollow'),
    _show: function(){
      if(comts._tag != 'true'){
        S.later(function(){
          D.remove('#J_comtmain .act');
          D.html('#J_comtmain .textarea-b textarea','跟单才能评论~~');
          D.show('#J_comtmain');
        },2000);
      }else{
        D.show('#J_comtmain');
      }
    }
  };
  // 如果没有跟单，则隐藏评论窗口
  comts._show();
}, {
    requires: ['dom','assets/login/login','sizzle']
});