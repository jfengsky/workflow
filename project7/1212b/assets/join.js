/**
 * 类目列表
 * @author: wb-jiangfeng <wb-jiangfeng@taobao.com>
 * @time  : 2012-11-23 16:25
 * @return: 
 */

KISSY.add(function(S, D, UA, DataLazyload, Scrollflow) {
  //懒加载
  var dataLazyload= DataLazyload();
  //DataLazyload( { mod: 'auto' } );
  // 圆角
  // if(UA.ie <= 8){
  //   RoundRect.render('.c2b-circles');
  //   //RoundRect.render('#J_jd_head .c2b-circles');
  // }
    // var right_scroll = new Scrollflow();
    // right_scroll.render('#J_c2bRightbar',100,990);
    var bottom_scroll = new Scrollflow();
    bottom_scroll.render('#J_c2bBtmbar','bottom');
}, {
    requires: ['dom','ua','datalazyload','assets/scrollfollow']
});