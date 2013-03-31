/**
 * 类目列表
 * @author: wb-jiangfeng <wb-jiangfeng@taobao.com>
 * @time  : 2012-11-23 16:25
 * @return: 
 */

KISSY.add(function(S, D, UA, DataLazyload, Scrollbottom) {
  //懒加载
  var dataLazyload= DataLazyload();
  
  var bottom_scroll = new Scrollbottom('#J_c2bBtmbar',48);
  bottom_scroll.render();
}, {
    requires: ['dom','ua','datalazyload','assets/scrollbottom']
});