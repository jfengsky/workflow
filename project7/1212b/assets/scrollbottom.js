/**
 * ie6 position:fixed 停留在页面底部
 * @author: wb-jiangfeng <wb-jiangfeng@taobao.com>
 * @time  : 2012-11-29 20:16
 * @return: 
 */
KISSY.add(function(S, D, E, UA) {
  function Scrollbottom(id, barheight){
    var self = this;
    this._resize = function(){
      E.on(window, 'resize', function(){
        return D.viewportHeight();
      });
      return D.viewportHeight();
    };
    this.render = function(){
      if(UA.ie <= 6){
        //console.log(D.viewportHeight());
        //console.log(D.scrollTop());
        D.viewportHeight();
        var viewHeight = self._resize(),
            bar_height = viewHeight + D.scrollTop() - barheight;
        D.css(id,{'position':'absolute','top':bar_height});
        E.on(window, 'scroll', function(){
          bar_height = viewHeight + D.scrollTop() - barheight;
          self._resize();
          D.css(id,{'position':'absolute','top':bar_height});
        });
      }
    };
  }
  return Scrollbottom;
}, {
    requires: ['dom','event','ua']
});