/**
 * ��������ҳ�� ��Ŀѡ��js
 * @Author: wb-jiangfeng
 * @Time: 12-6-19 ����2:10
 *
 */
KISSY.add(function(S, D, E, UA, O){
    //TODO��ҳ���и�����ʾ��Ŀѡ��
    var Publish = {
        content:'<div class="pub_types" id="J_pubtypes">' +
            '<h4>ѡ����Ŀ</h4>' +
                '<table>' +
                    '<tr>' +
                        '<td>����װ��</td>' +
                        '<td>���Ի�</td>' +
                        '<td>��Ʒ�����Ʒ�����Ʒ���</td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td>�������</td>' +
                        '<td>�Ƶ�Ʊ��</td>' +
                        '<td>���δ���</td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td>����</td>' +
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