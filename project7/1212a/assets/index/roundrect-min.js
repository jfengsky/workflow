KISSY.add(function(e){function m(a,c){this.set({el:a,radius:c});this.draw()}function p(a){a+="";return n[1].test(a)?a.split(" ")[0]:null}function q(a,c,b,d,k,o,l,h,i){var j=document.createElement("v:roundrect");f(j).attr({arcsize:a,strokeColor:c,strokeWeight:b,stroked:d}).css({display:"block",width:k+"px",height:o+"px",position:"absolute",top:l+"px",left:h+"px",antialias:true,zIndex:i});return j}function r(a,c){var b=document.createElement("v:fill");a={color:a};if(c!="none"){a.src=c;a.type="tile";
a.size="100%,100%";f(b).addClass("vml-fill")}f(b).attr(a);return b}function u(a){var c=q(0.5,"#FFFFFF",0,false,1,1,0,0,0),b=r("#FFFFFF","none");f(c).hide();c.appendChild(b);a.append(c)}var f=e.all,v=e.DOM,n=[/^(\.|#).+$/,/^\d+(?:px|%)/,/relative|absolute/],s=!e.UA.ie||e.UA.ie>=9;if(!s&&!document.namespaces.v){document.namespaces.add("v","urn:schemas-microsoft-com:vml");var t=document.createStyleSheet();t.addRule("v\\:roundrect","behavior: url(#default#VML);");t.addRule("v\\:fill","behavior: url(#default#VML);")}e.extend(m,
e.Base,{draw:function(){var a=this.get("el"),c=this.get("radius"),b=a.offset(),d=a.outerWidth(),k=a.outerHeight(),o=Math.min(~c.indexOf("%")?parseInt(c)/100:parseInt(c)/Math.min(d,k),1);c=a.css("backgroundColor");var l=a.css("backgroundImage").replace(/^url\(([^\)]+)\)$/,"$1").replace(/"|'/g,""),h=a.css("borderColor"),i=parseInt(a.css("borderWidth")),j="true",g={background:"transparent"};if(!i){h=c;i=0;j="false"}if(a[0].tagName=="IMG"){l=a[0].src;g.visibility="hidden"}if(e.UA.ie==6)g.filter="chroma(color="+
h+")";else g.borderColor="transparent";a.css(g);for(a=a;a=a.parent();)if(!a[0]._ks_roundRect){!n[2].test(a.css("position"))&&a.css("position","relative");break}a.css("zIndex",+a.css("zIndex")||0);g=a.offset();b=q(o,h,i,j,d,k,b.top-g.top,b.left-g.left,a.css("zIndex")-1);d=r(c,l);b.appendChild(d);a.append(b);this.set("rect",f(b))},remove:function(){this.get("rect").remove();this.set("rect",null)}},{render:function(){var a=[].slice.apply(arguments);n[0].test(a[0]+"")||(a=[".round-rect"].concat(a));if(v.get(a[0]))if(s){if(b=
p(a[1]))f(a[0]).each(function(d){d.css({"border-radius":b,"-moz-border-radius":b,"-webkit-border-radius":b})})}else{var c,b;f(a[0]).each(function(d){d[0]._ks_roundRect&&d[0]._ks_roundRect.remove();b=a[1]||d[0].currentStyle["border-radius"];if(b=p(b)){c=new m(d,b);d[0]._ks_roundRect=c}});c&&u(c.get("rect").parent())}}});return m});
