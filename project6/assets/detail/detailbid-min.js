KISSY.add(function(e,a,n,k,l,j,c,g,d){var h=a.html("#J_winedibid");n.on("#J_tobid","click",function(){if(!g.check()){g.cover()}else{var p=new j.Dialog({width:680,elCls:"bid",elStyle:{position:l.ie==6?"absolute":"fixed"},bodyContent:h,mask:true,zIndex:10010,closable:false,align:{points:["cc","cc"]},closeAction:"destroy"});p.show();var o=new d("#J_UploaderBtn","#J_UploaderQueue");o.on("init",function(q){var r=q.uploader;r.on("success",function(w){var t=w.index,u=w.file,s=w.result;if(s.status==1){var v=a.val("#J_attach");v=v+";"+s.data.id;a.val("#J_attach",v);var x=e.query("#J_UploaderQueue li");var y=e.filter(x,function(z){return a.attr(z,"data-id")===undefined});if(y.length>0){a.attr(y[0],"data-id",s.data.id)}}});r.on("error",function(t){var s=t.result;if(s.message){alert(s.message)}});n.delegate("#J_UploaderQueue","click",".success-status a",function(y){if(a.attr(y.target,"href")=="#fileDel"){var s=a.val("#J_outerkey");var u=a.val("#J_reqkey");var w=a.val("#J_operation");var t="";if(w==="P"){t="&"+s+"=0&"+u+"="+a.val("#J_reqId")}var x=a.parent(y.target,"li");var v=a.val("#J_delAttachUrl");c({type:"post",url:v+a.attr(x,"data-id")+t,success:function(z){},dataType:"json"})}})});n.on("#J_wbclose","click",function(){p.destroy();m="";f=[]})}});var b=function(){var o=document.location.href;var p=/(.daily.taobao.net)/i;return p.test(o)};n.delegate(document,"click","#J_rule",function(){if(!a.prop("#J_rule","checked")){a.show("#J_checkerr")}else{a.hide("#J_checkerr")}});var m="",f=[];n.delegate(document,"focusout","#J_itemUrl",function(q){m="";f=[];a.remove(".propOption");var p=encodeURI(e.trim(a.val("#J_itemUrl")));if(p==" "||p==""||p==m){return false}m=p;var o="http://hm.taobao.com/json/get_sku.htm?item_url="+p;if(b()){o="http://hm.daily.taobao.net/json/get_sku.htm?item_url="+p}c({type:"get",dataType:"json",url:o,success:function(u){var t="";for(var s=0;s<u.display.length;s++){t+='<dl class="propOption">';t+="<dt>"+u.display[s].text+":</dt>";t+='<dd><ul class="c2b-sku">';for(var r=0;r<u.display[s].values.length;r++){t+='<li class="J_selectProp" prop='+u.display[s].pid+" prop-val="+u.display[s].values[r].vid+'><a href="javascript:void(0);">'+u.display[s].values[r].text+"</a><i></i></li>"}t+="</ul></dd> ";t+="</dl>"}f=u.sku;a.append(a.create(t),a.parent(q.target,"li"))}})});n.undelegate("li.J_selectProp a");n.delegate(document,"click","li.J_selectProp a",function(o){a.removeClass(a.children(a.parent(o.target,".c2b-sku")),"selected");a.addClass(a.parent(o.target,".J_selectProp"),"selected")});n.delegate(document,"click","#J_bidSubmit",function(){if(!a.prop("#J_rule","checked")){a.show("#J_checkerr")}else{var q=e.query(".propOption .c2b-sku .selected"),t="";e.each(q,function(u){t+=a.attr(u,"prop")+a.attr(u,"prop-val")});for(var p=0;p<f.length;p++){if(f[p].key==t){a.val("#J_sku",f[p].value);break}}a.hide("#J_bidSubmit");a.show("#J_pubing");var o=a.attr("#J_bidPublish","action");var s=e.query("#J_bidPublish input");var r={};for(i=0;i<s.length;i++){r[a.attr(s[i],"name")]=a.val(s[i])}r[a.attr("#J_bidArea","name")]=encodeURIComponent(a.val("#J_bidArea"));c({type:"post",url:o,data:r,success:function(u){e.later(function(){a.show("#J_bidSubmit");a.hide("#J_pubing")},500);if(u.System){alert(u.System)}if(u.J_itemUrl){a.text("#J_urlerr",u.J_itemUrl);n.delegate(document,"blur","#J_itemUrl",function(){a.html("#J_urlerr","")})}if(u.J_price){a.html("#J_monerr",u.J_price);n.delegate(document,"blur","#J_price",function(){a.html("#J_monerr","")})}if(u.J_memo){a.text("#J_areaerr",u.J_memo);n.delegate(document,"blur","#J_bidArea",function(){a.html("#J_areaerr","")})}if(!u.System&&!u.J_itemUrl&&!u.J_price&&!u.J_memo){document.location.reload()}},error:function(){alert("\u7f51\u7edc\u8d85\u65f6\uff0c\u6295\u6807\u5931\u8d25\uff01");e.later(function(){a.show("#J_bidSubmit");a.hide("#J_pubing")},500)},dataType:"json"})}})},{requires:["dom","event","template","ua","overlay","ajax","assets/login/login","gallery/form/1.2/uploader/index"]});