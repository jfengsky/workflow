/**
 * 
 * @Author: wb-jiangfeng
 * @Time: 12-6-18 下午3:21
 *
 */
KISSY.add(function(S, D, E, Template, UA, O, IO, Login, RenderUploader) {
    //弹层数据
    // var data = {'url':'http://www.taobao.com/',
    //             'price':'190.00',
    //             'texts':'texts texts texts texts',
    //             'img':'http://img.f2e.taobao.net/img.png?x=169x150',
    //             'wangwang':'jfeng173'
    //         };
	//var tpl = D.text('#J_winbid')
    //TODO bid_show=1 则默认显示卖家竞标那个层 url里有这个参数的话，且值为1
    //var tpl = Template(D.text('#J_winedibid')).render(data);
    var tpl = D.html('#J_winedibid');
    E.on('#J_tobid','click',function(){
        //TODO 先判断登录
        if(!Login.check()){
            Login.cover();
        }else{
        	var dialog = new O.Dialog({
                width:680,
                elCls: 'bid',
                elStyle:{
                    position: UA.ie == 6 ? "absolute" : "fixed"
                },
                bodyContent: tpl,
                mask: true,
                zIndex: 10010,
                closable:false,
                align: {
                    points: ['cc', 'cc']
                },
                closeAction:"destroy"
            });
            dialog.show();
            var ru = new RenderUploader('#J_UploaderBtn', '#J_UploaderQueue');
            ru.on("init", function (ev) {
                var uploader = ev.uploader;
                //console.log(222);
                uploader.on('success', function (ev) {
                    var index = ev.index, file = ev.file,result = ev.result;
                    if(result.status == 1){
                        //console.log(index);
                        //##获取J_attach
                        var temp_attach = D.val('#J_attach');
                        temp_attach = temp_attach + ';' + result.data.id;
                        D.val('#J_attach',temp_attach);
                        var updata_list = S.query('#J_UploaderQueue li');
                        // updated by qianjun.fgj
                        var real_updata_list = S.filter(updata_list, function(one) {
                            return D.attr(one, 'data-id') === undefined;
                        });
                        if (real_updata_list.length > 0) {
                            D.attr(real_updata_list[0],'data-id',result.data.id);
                        }

                    }

                });
                uploader.on('error', function (ev) {
                    var result = ev.result;
                    if(result.message){
                        alert(result.message);
                    }

                });
                //##点击删除
                E.delegate('#J_UploaderQueue','click','.success-status a',function(ev){                  
                    if(D.attr(ev.target,'href') == '#fileDel'){
                    	// 删除附件，拼装动态的几个参数
                    	var outerKey = D.val('#J_outerkey');
                    	var reqKey = D.val('#J_reqkey');
                    	var operation = D.val('#J_operation');	// 操作类型(1 发布；2 编辑)
                    	var partParam = '';
                    	// 发布投标
                    	if (operation === 'P') {
                    		partParam = '&' + outerKey + '=0&' + reqKey + '=' + D.val('#J_reqId');
                    	}
                    	
                        var ev_parent = D.parent(ev.target,'li');
                        var sendURL = D.val('#J_delAttachUrl');
                        IO({
                            type:'post',
                            url:sendURL + D.attr(ev_parent,'data-id') + partParam,
                            success:function(data){
                            },
                            dataType:'json'
                        });
                    }

                });
            });
            
            E.on('#J_wbclose','click',function(){
                dialog.destroy();
                oldshopurl="";
                gz_skuidarry=[];

            });
        }
    });
    var _daily = function(){
        var url = document.location.href;   //获取页面URL地址
        var reg = /(.daily.taobao.net)/i;
        return reg.test(url);
    };
    //确认同意服务条款
    E.delegate(document,'click','#J_rule',function(){
        if(!D.prop('#J_rule','checked')){
            D.show('#J_checkerr');
        }else{
            D.hide('#J_checkerr');
        }
    });
    var oldshopurl="",gz_skuidarry=[];
    E.delegate(document,'focusout','#J_itemUrl',function(ev){
        oldshopurl="";
        gz_skuidarry=[];
        D.remove(".propOption");
		var shopurl = encodeURI(S.trim(D.val('#J_itemUrl')));
        if(shopurl==" "||shopurl==""||shopurl==oldshopurl){
            return false;
        }
        oldshopurl=shopurl;
        var url = 'http://hm.taobao.com/json/get_sku.htm?item_url='+shopurl;
        if(_daily()){
            url = 'http://hm.daily.taobao.net/json/get_sku.htm?item_url='+shopurl;
        }
        IO({
            type:'get',
            dataType:'json',
//                url:'http://hm.daily.taobao.net/json/aliWs.htm?_input_charset=UTF-8&title='+msg,
            url:url,
            success:function (data) {
               var skucontent="";
                for(var i=0;i<data.display.length;i++){
                    skucontent+='<dl class="propOption">';
                    skucontent+='<dt>'+data.display[i].text+':</dt>';
                    skucontent+=  '<dd>'+'<ul class="c2b-sku">';
                    for(var j=0;j<data.display[i].values.length;j++){
                        skucontent+= '<li class="J_selectProp" prop='+data.display[i].pid+' prop-val='+data.display[i].values[j].vid+'>'+
                                '<a href="javascript:void(0);">'+data.display[i].values[j].text+'</a>'+
                                '<i></i>'+
                                '</li>';
                    }
                    skucontent+= '</ul></dd> ';
                    skucontent+='</dl>';

                }
                gz_skuidarry=data.sku;
                D.append(D.create(skucontent),D.parent(ev.target,'li'));
            }
        });
    });
    E.undelegate('li.J_selectProp a');
    E.delegate(document,'click','li.J_selectProp a',function(e){
        D.removeClass(D.children(D.parent(e.target, '.c2b-sku')),"selected");
        D.addClass(D.parent(e.target, '.J_selectProp'),"selected");
//        D.val('#J_sku',prop+prop_val);
    });
    //获取所有表单内容
    E.delegate(document,'click','#J_bidSubmit',function(){
        if(!D.prop('#J_rule','checked')){
            D.show('#J_checkerr');
        }else{
            var selecteds=S.query(".propOption .c2b-sku .selected"),
                skuid="";
            S.each(selecteds,function(item){
                skuid+=D.attr(item,'prop')+ D.attr(item,'prop-val');
            });
            for(var j=0;j<gz_skuidarry.length;j++){
                if(gz_skuidarry[j].key==skuid){
                    D.val('#J_sku',gz_skuidarry[j].value);
                    break;
                }

            }
        	// 非实物类需求，投标必须上传附件，提交前校验
        	// var material = D.val('#J_material');
        	// if (!material || material == 'false') {
        	// 	if (!D.val('#J_attach')) {
        	// 		D.html('#J_attacherr','请上传附件图');
        	// 		return false;
        	// 	}
        	// // }
        	// // 清空附件错误信息
        	// D.html('#J_attacherr','');
        	
            //隐藏按钮，避免重复提交
            D.hide('#J_bidSubmit');
            D.show('#J_pubing');

            var post_url = D.attr('#J_bidPublish','action');    //提交地址
            var post_input = S.query('#J_bidPublish input');
            var post_data = {};
            for(i = 0; i< post_input.length; i++){
                post_data[D.attr(post_input[i],'name')] = D.val(post_input[i]);
            }
            //post_data[D.attr('#J_bidArea','name')] = D.val('#J_bidArea');
            post_data[D.attr('#J_bidArea','name')] = encodeURIComponent(D.val('#J_bidArea'));
            //console.log(encodeURIComponent(D.val('#J_bidArea')));

            IO({
                type:"post",
                //url:'http://jfengsky.daily.taobao.net/ying/DEMO/PHP/detail.php',
                url: post_url,
                data: post_data,
                success: function(data){
                    /**
                    {
                       System:'error',
                       J_itemUrl:'error',
                       J_price:'error',
                       J_memo:'error'
                    }
                    */
                   //console.log(data);
                    //防止重复提交表单
                    S.later(function(){
                        D.show('#J_bidSubmit');
                        D.hide('#J_pubing');
                    },500);
                    if(data['System']){
                        alert(data['System']);
                    }
                    if(data['J_itemUrl']){
                        //alert(data['J_itemUrl']);
                        D.text('#J_urlerr',data['J_itemUrl']);
                        E.delegate(document,'blur','#J_itemUrl',function(){
                            D.html('#J_urlerr','');
                        });
                    }
                    if(data['J_price']){
                        //alert(data['J_price']);
                        D.html('#J_monerr',data['J_price']);
                        E.delegate(document,'blur','#J_price',function(){
                            D.html('#J_monerr','');
                        });
                    }
                    if(data['J_memo']){
                        //alert(data['J_memo']);
                        D.text('#J_areaerr',data['J_memo']);
                        E.delegate(document,'blur','#J_bidArea',function(){
                            D.html('#J_areaerr','');
                        });
                    }

                    if(!data['System'] && !data['J_itemUrl'] && !data['J_price'] && !data['J_memo']){
                        document.location.reload();
                    }

                },
                error:function(){
                    alert('网络超时，投标失败！');
                    S.later(function(){
                        D.show('#J_bidSubmit');
                        D.hide('#J_pubing');
                    },500);
                },
                //scriptCharset:'utf-8',
                dataType: 'json'

            });
        }
    });
}, {
    requires: ['dom', 'event','template','ua', 'overlay','ajax','assets/login/login','gallery/form/1.2/uploader/index']
//    requires: ['dom', 'event','template','ua', 'overlay','ajax','assets/mods/login','assets/mods/publish_upload']

});