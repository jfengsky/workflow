/**
 * 顶部弹出flash层
 * @Author: wb-jiangfeng
 * @Time: 12-6-18 下午3:21
 *
 */

KISSY.add(function(S, D, E, UA, O){
    var Topflash = {
        //flv:,
        cont:'<div class="tender">'+
                '<div class="title">' +
                    '<b>什么是有求必应？</b>' +
                    '<a href="javascript:void(0)" class="close ks-ext-close">关闭</a>' +
                '</div>' +
                '<div class=""><embed src="http://cloud.video.taobao.com/video/play/sid/11a/v/1/f/v.swf" quality="high" width="598px" height="500px" allowScriptAccess="always" allowFullscreen="true" type="application/x-shockwave-flash" pluginspage="http://get.adobe.com/cn/flashplayer/" id="taohuaplayer"></embed></div>' +
            '</div>',
        show:function(){
            E.on('#J_ying','click',function(){
                var dialog = new O.Dialog({
                    width:600,
                    elCls: 'topflash',
                    elStyle:{
                        position: UA.ie == 6 ? "absolute" : "fixed"
                    },

                    bodyContent: Topflash.cont,
                    zIndex: 10010,
                    mask: true,
                    closable:false,
                    align: {
                        points: ['cc', 'cc']
                    },
                    closeAction:"destroy"
                });
                dialog.show();
                E.on('.ks-ext-close','click',function(){
                    dialog.destroy();
                });
            })
        }
    }
    Topflash.show();
},{requires:['dom','event','ua','overlay']});