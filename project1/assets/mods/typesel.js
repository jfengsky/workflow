/**
 * 发布需求页面 类目选择js
 * @Author: wb-jiangfeng
 * @Time: 12-6-19 下午2:10
 *
 */
KISSY.add(function(S, D, E, UA, O){
    //TODO打开页面有浮层显示类目选择
    var Publish = {
        content:'<div class="pub_types" id="J_pubtypes">' +
            '<h4>选择类目</h4>' +
                '<table>' +
                    '<tr>' +
                        '<td>网店装修</td>' +
                        '<td>个性化</td>' +
                        '<td>设计服务设计服务设计服务</td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td>生活服务</td>' +
                        '<td>酒店票务</td>' +
                        '<td>网游代练</td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td>其它</td>' +
                        '<td></td>' +
                        '<td></td>' +
                    '</tr>' +
                '</table>' +
            '</div>',
        init: function(){
            var dialog = new O.Dialog({
                width:468,
                elCls: 'type',
                elStyle:{
                    position: UA.ie == 6 ? "absolute" : "fixed"
                },
                bodyContent: Publish.content,
                zIndex: 10010,
                mask: true,
                closable:false,
                align: {
                    points: ['cc', 'cc']
                },
                closeAction:"destroy"
            });
            dialog.show();

            E.delegate('#J_pubtypes','click','td',function(ev){
                var typesel = D.text(ev.target);
                if(typesel != ''){
                    D.text('#J_typesel',typesel);
                    D.val('#J_usertype',typesel);
                    dialog.destroy();
                }

            });
            if(UA.ie == 6){
                Publish._ieover();
            }
        },
        _ieover:function(){
            E.delegate('#J_pubtypes','mouseenter mouseleave','td',function(ev){
                if(ev.type == 'mouseenter'){
                    D.addClass(ev.target,'on');
                }
                if(ev.type == 'mouseleave'){
                    D.removeClass(ev.target,'on');
                }
            });
        }
    };
    Publish.init();
    E.on('#J_resel','click',Publish.init);
},{requires:['dom','event','ua','overlay']});