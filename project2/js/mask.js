/*
 * mask
 *
 *
*/
	// mouseXY
		function gx(el){
			var po=el;
			var left=el.offsetLeft;
			while(po=po.offsetParent){
				left+=po.offsetLeft;
			}
			return left;
		}
		
		function gy(el){
			var po=el;
			var top=el.offsetTop;
			while(po=po.offsetParent){
				top+=po.offsetTop;
			}
			return top;
		}
		
		function DisplayMp(event){
			var top,left,oDiv;
			oDiv=document.getElementById("demo");
			top=gy(oDiv);
			left=gx(oDiv);
			var cx=(event.clientX-left+document.body.scrollLeft)  -2+"px";
			var cy=(event.clientY-top+document.body.scrollTop) -2+"px";
			alert("x:" + cx + "; y:" + cy);
		}
	//

(function(S){
    var Event = S.Event; Dom=S.DOM;
	var mask=S.get('.ks-ext-mask');
	var mark_zin=S.get('.mark_zin');
	S.one('#add_mark').on('click',function(){
		Dom.css(mask,'display','block');
		Dom.css(mark_zin,'display','block');
		Dom.css('#J_MainImg','cursor','url(http://ieake.com/cursor.cur),move');
	})
	// mask hide
	S.one('#mark_cle').on('click',function(){
		Dom.css(mask,'display','none');
		Dom.css(mark_zin,'display','none');
		Dom.css('#J_MainImg','cursor','auto')
	})
	
	

	
	
	
	Event.add('#J_MainImg','click',function(){
		if(Dom.css(mask,'display')=='block'){		}
	});

		
})(KISSY)