KISSY.add(function(h,c,e,f){return function(){var d=this;this._hide=function(a,b){c.viewportWidth()<b&&b?c.hide(a):c.show(a)};this._resize=function(a,b){d._hide(a,b);e.on(window,"resize",function(){d._hide(a,b)})};this._position=function(a){switch(a){case "top":c.css(id,{position:"absolute",top:0});break;case "right":c.css(id,{position:"absolute",right:0});break;case "left":c.css(id,{position:"absolute",left:0});break;default:c.css(id,{position:"absolute",bottom:0})}};this.render=function(a,b,g){d._resize(a,
g);8>=f.ie&&("string"==typeof b?this._position(b):"number"==typeof b&&(c.css(a,{position:"absolute",top:b}),e.on(window,"scroll",function(){c.css(a,{top:c.scrollTop(this)+b})})))}}},{requires:["dom","event","ua"]});
