/**
 * �������
 * @Author: wb-jiangfeng
 * @Time: 12-6-18 ����3:21
 *
 */
KISSY.add(function(S, D, P) {
  var comts = {
    _tag: D.val('#J_isFollow'),
    _show: function(){
      if(comts._tag != 'true'){
        S.later(function(){
          D.remove('#J_comtmain .act');
          D.html('#J_comtmain .textarea-b textarea','������������~~');
          D.show('#J_comtmain');
        },2000);
      }else{
        D.show('#J_comtmain');
      }
    }
  };
  // ���û�и��������������۴���
  comts._show();
}, {
    requires: ['dom','assets/login/login','sizzle']
});