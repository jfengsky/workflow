/**
 * 有求必应公益版 发布页面 富文本编辑框
 * @Author: jiangfeng
 * @Time: 12-7-23 14:08
 *
 */
KISSY.add(function(S, D, E){
	/**
     * 渲染富文本编辑器
     */
    var KE = S.Editor;
    var cfg = {
        attachForm:true,
        baseZIndex:10000,
        pluginConfig:{
            "image":{
                upload:{
                    serverUrl:"/json/uploadResponse.htm?_input_charset=UTF-8",
                    serverParams:{
                        action:function () {
                            return "uploadAction";
                        },
                        event_submit_do_upload_for_kissy_editor:function () {
                            return "1";
                        },
                        _tb_token_:function () {
                            return S.one("#J_token").val();
                        }
                    },
                    surfix:"png,jpg,jpeg,gif",
                    fileInput:"fileData",
                    sizeLimit:3072
                }
            }
        }
    };
    var editor = KE("#editor", S.clone(cfg)).use("preview,separator,undo,separator,removeformat,font,format,image,separator,list,indent,justify,separator,table");

    /**
     * 初始化富文本编辑器内容
     */
    var srcDesc = D.val('#J_srcDesc');
    if (srcDesc) {  // 有参数传递，优先写参数
        S.later(function(){
            editor.setData(srcDesc);
        },200);
    }else{
        //获取J_desc里的值，如果存在，则请求富文本内容写入富文本框
        var temp_url = D.val('#J_desc');
        if(temp_url != ''){
            try{
                IO({
                    type:'get',
                    url:temp_url,
                    dataType:'jsonp',
					success:function(){
						//
					}
                });
                window['callback'] = function(data){
                    S.later(function(){
                        editor.setData(data.toString());
                    },200);
                };
            }catch(e){}
        }
    }

    /**
    * 展开关闭富文本编辑选项
    */


    /**
    * 看看别人怎么写
    */
    
    


    /**
    * 提交所有表单
    */
    E.on('#J_pubSubmit','click',function(){
        //TODO 项目描述是否符合要求
        
        //TODO 预算是否符合要求
        
        //TODO 卖家投标天数是否符合要求
        
        //TODO 会员募资天数是否符合要求
        
        //TODO 服务协议是否勾选

        //获取当前富文本内容写入input
        D.val('#J_realInputDesc', editor.getData());

        //提交表单
        S.get('#J_publish').submit();
    });




},{requires:['dom','event','editor']});