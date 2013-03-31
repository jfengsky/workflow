/* 
 * Description: RoundRectÔ²½Ç×é¼þ 
 * Created on 2012.10.10 by @Shidu
 */

KISSY.add(function(S){
  
  var $ = S.all, D = S.DOM;
  var REGXs = [ /^(\.|#).+$/, /^\d+(?:px|%)/, /relative|absolute/ ],
      supportedCSS3 = !S.UA.ie || S.UA.ie >= 9,
      DEF_CLS = '.round-rect',
      RRO_NAME = '_ks_roundRect';
  
  if(!supportedCSS3 && !document.namespaces.v) {
    document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
    var styleSheet = document.createStyleSheet();
    styleSheet.addRule("v\\:roundrect", "behavior: url(#default#VML);");
    styleSheet.addRule("v\\:fill", "behavior: url(#default#VML);");
  }
 
  function RoundRect(el, radius){
    this.set({
      el: el,
      radius: radius
    });
    this.draw();
  }
  
  S.extend(RoundRect, S.Base, {
    draw: function(){
      var v = this.get('el'), radius = this.get('radius'),
          pos = v.offset(), width = v.outerWidth(), height = v.outerHeight(),
          arcSize = Math.min(~radius.indexOf('%') ? (parseInt(radius)/100) : parseInt(radius)/Math.min(width,height), 1),
          fillColor = v.css('backgroundColor'),
          fillSrc = v.css('backgroundImage').replace(/^url\(([^\)]+)\)$/,'$1').replace(/"|'/g,''),
          strokeColor = v.css('borderColor'),
          strokeWeight = parseInt(v.css('borderWidth')),
          stroked = 'true',
          nStyle = { background: 'transparent' };
      if(!strokeWeight) {
        strokeColor = fillColor;
        strokeWeight = 0;
        stroked = 'false';
      }
      if(v[0].tagName == 'IMG') {
        fillSrc = v[0].src;
        nStyle.visibility = 'hidden';
      }
      if(S.UA.ie == 6){
        nStyle.filter = 'chroma(color='+strokeColor+')';
      } else {
        nStyle.borderColor = 'transparent';
      }
      v.css(nStyle);
      var el = v, pPos, rect, fill;
      while(el = el.parent()){
        if(el[0][RRO_NAME]) continue;
        !REGXs[2].test(el.css('position')) && el.css('position','relative');
        break;
      }
      el.css('zIndex', +el.css('zIndex')||0);
      pPos = el.offset(),
      rect = createRect(arcSize,strokeColor,strokeWeight,stroked,width,height,pos.top-pPos.top,pos.left-pPos.left,el.css('zIndex')-1),
      fill = createFill(fillColor, fillSrc);
      rect.appendChild(fill);
      el.append(rect);
      
      this.set('rect', $(rect));
    },
    remove: function(){
      this.get('rect').remove();
      this.set('rect', null);
    }
  }, {
    render: function(){
      var arg = [].slice.apply(arguments);
      if(!REGXs[0].test(arg[0]+'')) arg =  [DEF_CLS].concat(arg);
      if(!D.get(arg[0])) return;
      if(!supportedCSS3) {
        var rr, radius;
        $(arg[0]).each(function(v, i){
          v[0][RRO_NAME] && v[0][RRO_NAME].remove();
          radius = arg[1] || v[0].currentStyle['border-radius'];
          if(radius = getRaidusVal(radius)){
            rr = new RoundRect(v, radius);
            v[0][RRO_NAME] = rr;
          }
        });
        rr && patchForIE8(rr.get('rect').parent());
      } else if(radius = getRaidusVal(arg[1])){
        $(arg[0]).each(function(v){
          v.css({
            'border-radius': radius,
            '-moz-border-radius': radius,
            '-webkit-border-radius': radius
          });
        })
      }
    }
  });
  
  function getRaidusVal(str){
    str += '';
    return REGXs[1].test(str) ? str.split(' ')[0] : null;
  }
  function createRect(arcSize, strokeColor, strokeWeight, stroked, width, height, top, left, idx) {
    var r = document.createElement('v:roundrect');
    $(r).attr({
      arcsize: arcSize,
      strokeColor: strokeColor,
      strokeWeight: strokeWeight,
      stroked: stroked
    }).css({
      display: 'block',
      width: width + 'px',
      height: height + 'px',
      position: 'absolute',
      top: top + 'px',
      left: left + 'px',
      antialias: true,
      zIndex: idx
    });
    return r;
  }
  function createFill(color, src){
    var fill = document.createElement('v:fill'), attr = {
      color: color
    };
    if(src != 'none') {
      attr.src = src;
      attr.type = 'tile';
      attr.size = '100%,100%';
      $(fill).addClass('vml-fill');
    }
    $(fill).attr(attr);
    return fill;
  }
  function patchForIE8(wrap){
    var rect = createRect(0.5, '#FFFFFF', 0, false, 1, 1, 0, 0, 0),
        fill = createFill('#FFFFFF', 'none');
    $(rect).hide();
    rect.appendChild(fill);
    wrap.append(rect);
  }

  return RoundRect;
  
});
