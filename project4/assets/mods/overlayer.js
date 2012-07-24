/**
 * 有求必应公益版 通用弹出浮层
 * @Author: jiangfeng
 * @Time: 12-7-24 11:38
 * @Return:
 *
 */
KISSY.add(function(S, D, E, UA, O){
	function Overlayer(title,cnt,elcs){
		var self = this;
		this.content = '<div class="tender" id="J_tender">' +
            '<div class="title gre">' +
                '<b>'+ title +'</b>' +
                '<a class="close" href="javascript:void(0)">关闭</a>' +
            '</div>' + cnt +
        '</div>';
		this.show = function(){
			var dialog = new O.Dialog({
                width:530,
                elCls: elcs,
                elStyle:{
                    position: UA.ie == 6 ? "absolute" : "fixed"
                },
                bodyContent: self.content,
                mask: true,
                zIndex: 10010,
                align: {
                    points: ['cc', 'cc']
                },
                closable:false,
                closeAction:"destroy"
            });
            dialog.show();
            E.delegate('#J_tender','click','a.close',function(){
                dialog.destroy();
            });
		};
	}
	return Overlayer;
},{requires:['dom','event','ua','overlay']});