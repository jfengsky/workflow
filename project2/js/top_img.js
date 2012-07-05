/*  
 * top images scroll and main image change
 *{ img_url: 
 *  data_url:
 *}
 *
*/

(function(S){
	var carousel;
	var S = KISSY, Dom = S.DOM;
	var thumbs = S.query("#top_pics p");
	var mainPic=S.one("#J_MainImg");
	S.use("switchable", function(S) {
		var carousel = new S.Carousel('#top_pics', {
			effect: 'scrollx',
			easing: 'easeOutStrong',
			steps: 8,
			viewSize: [880],
			circular: false,
			prevBtnCls: 'prev',
			nextBtnCls: 'next',
			disableBtnCls: 'disable'
		})
		
		carousel.on('itemSelected', function(ev) {
		var currentThumb = ev.item,
             thumbs = thumbs || Dom.siblings(currentThumb);
            Dom.removeClass(thumbs, "cur");
            Dom.addClass(currentThumb, "cur");
			mainPic_url(mainPic,'http://img03.taobaocdn.com/bao/uploaded/i3/T1N8VGXbVjXXaofXnX_113747.jpg');
		});
		
		// fire one selected item
			carousel.fire("itemSelected", {
				item: thumbs[0]
			});
	
		// mainPic	
		function mainPic_url(mainPic, src) {
			src = src || DC.data.pic["picPath"];
			Dom.attr(mainPic, "src", src);
		};
		})
})(KISSY)
