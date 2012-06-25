/**
 * 发布需求页面 富文本编辑框
 * @Author: wb-jiangfeng
 * @Time: 12-6-19 下午4:00
 *
 */

KISSY.add(function(S, D, E , UA, O, Switchable){
    //初始化富文本编辑器
    var KE = KISSY.Editor;
    var cfg = {
        attachForm:true,
        baseZIndex:10000,
        pluginConfig:{
            "templates":[
                {
                    demo:"模板1效果演示html",
                    html:"<div style='border:1px solid red'>模板1效果演示html</div><p></p>"
                },
                {
                    demo:"模板2效果演示html",
                    html:"<div style='border:1px solid red'>模板2效果演示html</div>"
                }
            ],
            "draft":{
                interval:5,
                limit:10,
                helpHtml:"<div " +
                    "style='width:200px;'>" +
                    "<div style='padding:5px;'>草稿箱能够自动保存您最新编辑的内容，" +
                    "如果发现内容丢失，" +
                    "请选择恢复编辑历史</div></div>"
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
    //展开编辑项
    E.on('#J_showedit','click',function(){
        if(D.hasClass('#J_showedit span','up')){
            D.hide('.ke-editor-tools');
            D.removeClass('#J_showedit span','up');
            D.text('#J_showedit em','展开编辑选项');
        }else{
            D.show('.ke-editor-tools');
            D.addClass('#J_showedit span','up');
            D.text('#J_showedit em','隐藏编辑选项');
        }
    });

    //看看别人怎么写
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