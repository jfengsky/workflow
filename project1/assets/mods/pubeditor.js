/**
 * ��������ҳ�� ���ı��༭��
 * @Author: wb-jiangfeng
 * @Time: 12-6-19 ����4:00
 *
 */

KISSY.add(function(S, D, E , UA, O, Switchable){
    //��ʼ�����ı��༭��
    var KE = KISSY.Editor;
    var cfg = {
        attachForm:true,
        baseZIndex:10000,
        pluginConfig:{
            "templates":[
                {
                    demo:"ģ��1Ч����ʾhtml",
                    html:"<div style='border:1px solid red'>ģ��1Ч����ʾhtml</div><p></p>"
                },
                {
                    demo:"ģ��2Ч����ʾhtml",
                    html:"<div style='border:1px solid red'>ģ��2Ч����ʾhtml</div>"
                }
            ],
            "draft":{
                interval:5,
                limit:10,
                helpHtml:"<div " +
                    "style='width:200px;'>" +
                    "<div style='padding:5px;'>�ݸ����ܹ��Զ����������±༭�����ݣ�" +
                    "����������ݶ�ʧ��" +
                    "��ѡ��ָ��༭��ʷ</div></div>"
            },
            "resize":{
                direction:["y"]
            },

            dragupload:{
                surfix:"png,jpg,jpeg,gif",
                fileInput:"Filedata",
                sizeLimit:1000,
                serverUrl:"/code/upload/web/upload.jsp",
                serverParams:{
                    waterMark:function () {
                        return true;
                    }
                }
            }
        }
    };
    var editor = KE("#editor", S.clone(cfg)).use("elementpaths,sourcearea,preview,separator,undo,separator,removeformat,font,templates,format,color,separator,list,indent,justify,separator,table,resize,draft");







    /*
    var KE = KISSY.Editor;
    var cfg = {
        attachForm:true,
        baseZIndex:10000
    };
    var editor = KE("#editor", S.clone(cfg)).use("elementpaths," +
        "sourcearea,preview" +
        "separator," +
        "undo,separator," +
        "removeformat,font,format,color,separator," +
        "list,indent," +
        "justify," +
        "separator,maximize");
     */
    //չ���༭��
    E.on('#J_showedit','click',function(){
        if(D.hasClass('#J_showedit span','up')){
            D.hide('.ke-editor-tools');
            D.removeClass('#J_showedit span','up');
            D.text('#J_showedit em','չ���༭ѡ��');
        }else{
            D.show('.ke-editor-tools');
            D.addClass('#J_showedit span','up');
            D.text('#J_showedit em','���ر༭ѡ��');
        }
    });

    //����������ôд
    var tpl_model = D.text('#J_model');
    E.on('#J_editmodel','click',function(){
        var dialog = new O.Dialog({
            width:468,
            elCls: 'type',
            elStyle:{
                position: UA.ie == 6 ? "absolute" : "fixed"
            },
            bodyContent: tpl_model,
            zIndex: 10010,
            mask: true,
            closable:false,
            align: {
                points: ['cc', 'cc']
            },
            closeAction:"destroy"
        });
        dialog.show();
        var Tabs = Switchable.Tabs;
        var tabs = new Tabs('#J_models', {
            switchTo : 0
        });
        tabs.on('beforeSwitch', function(ev) {
            var index = ev.toIndex;
            if(index !== 0 && index !== 4) {
            }
        });
        E.on('#J_model_close','click',function(){
            dialog.destroy();
        })
    });
},{requires:['dom','event','ua','overlay','switchable','editor']});