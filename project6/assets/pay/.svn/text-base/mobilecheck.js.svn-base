/**
 * 合买版detail页面 手机号码表单验证
 * @Author: wb-jiangfeng
 * @Time: 12-11-1 13:53
 * @Param:
 */

KISSY.add(function(S, D, E) {
  var mobile = {
    check: function(el){
      if (!(/^\d{11}$/.test(el))) {
        return false;
      }else{
        return true;
      }
    }
  };

  E.on('#J_mobilenumber', 'blur', function(){
    var mobile_num = D.val('#J_mobilenumber');
    var result = mobile.check(mobile_num);
    if(result){
      D.hide('#J_mobilerr');
    }else{
      D.show('#J_mobilerr');
    }
  });
}, {
    requires: ['dom','event']
});