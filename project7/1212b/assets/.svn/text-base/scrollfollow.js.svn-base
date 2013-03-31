/**
 * ie6 position:fixed
 * @author: wb-jiangfeng <wb-jiangfeng@taobao.com>
 * @time  : 2012-11-29 20:16
 * @return: 
 */

KISSY.add(function(S, D, E, UA) {
  function Scrollflow(){
    var self = this;
    /**
     * [ie6下容器悬停]
     * @param  {String} id      [容器]
     * @param  {Number, String} topheight [距离顶部高度, 'top', 'right','bottom','left']
     * @param  {Number, null} hidewide [文档宽度，当浏览器小于这个宽度隐藏容器,不填时一直显示]
     * @return {[type]}         [description]
     */
    this._hide = function(id,wide){
      if(D.viewportWidth() < wide && arguments[1]){
        D.hide(id);
      }else{
        D.show(id);
      }
    };
    this._resize = function(id,wide){
      self._hide(id,wide);
      E.on(window, 'resize', function(){
        self._hide(id,wide);
      });
    };
    this._position = function(el){
      switch(el){
        case 'top':
        D.css(id,{'position':'absolute','top':0});
        break;
        case 'right':
        D.css(id,{'position':'absolute','right':0});
        break;
        case 'left':
        D.css(id,{'position':'absolute','left':0});
        break;
        default:
        D.css(id,{'position':'absolute','bottom':0});
      }
    };
    this.render = function(id, topheight, hidewide){
      self._resize(id, hidewide);
      if(UA.ie <=8){
        if(typeof topheight == 'string'){
          this._position(topheight);
        }else if(typeof topheight == 'number'){
          D.css(id,{'position':'absolute','top':topheight});
          E.on(window, 'scroll', function(){
            D.css(id, {'top':D.scrollTop(this) + topheight});
            // S.log(D.scrollTop(this) + topheight);
          });
        }
      }
      // if(UA.ie <= 6){
      //   if(topheight == 'bottom'){
      //     D.css(id,{'position':'absolute','bottom':0});
      //   }else{
      //     D.css(id,{'position':'absolute','top':topheight});
      //     E.on(window, 'scroll', function(){
      //       D.css(id, {'top':D.scrollTop(this) + topheight});
      //       // S.log(D.scrollTop(this) + topheight);
      //     });
      //   }
      // }
    };
  }
  return Scrollflow;
}, {
    requires: ['dom','event','ua']
});