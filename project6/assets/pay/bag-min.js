KISSY.add(function(i,e,d,f,g,h,b){var a={_id:e.val("#reqId"),_backUrl:b._daily()?"http://hm.daily.taobao.net/group/group_detail.htm?id=":"http://hm.taobao.com/group/group_detail.htm?id=",_getUrl:b._daily()?"http://hm.daily.taobao.net/json/send_red_gen.htm":"http://hm.taobao.com/json/send_red_gen.htm",_succTpl:function(){return'<div class="c2b-bag-overlay"><span class="bagclose" id="J_bagClose">\u5173\u95ed</span><i></i><div class="bag-info"><p>\u606d\u559c\u60a8\uff0c\u62a2\u5230<span class="bag-money">5</span>\u5143\u9650\u91cf\u7ea2\u5305</p><div class="bag-btn"><a href="'+
a._backUrl+a._id+'" class="back-info">\u56de\u5408\u4e70\u8be6\u60c5\u9875</a><a href="https://hongbao.alipay.com/coupon/index.htm" class="pay-view">\u53bb\u652f\u4ed8\u5b9d\u770b\u770b</a></div></div></div>'},_errTpl:function(){return'<div class="c2b-bag-overlay"><span id="J_bagClose" class="bagclose">\u5173\u95ed</span><i class="noe"></i><div class="bag-info"><p>\u5f88\u9057\u61be\uff0c\u60a8\u6ca1\u62a2\u5230\u7ea2\u5305~</p><div class="bag-btn" style="padding-left:60px"><a href="'+a._backUrl+a._id+'" class="back-info">\u56de\u5408\u4e70\u8be6\u60c5\u9875</a></div></div></div>'},_dailog:function(c){(new h.Dialog({width:550,elCls:"baglay",elStyle:{position:f.ie==
6?"absolute":"fixed"},bodyContent:c,mask:true,zIndex:10010,align:{points:["cc","cc"]},closable:false,closeAction:"destroy"})).show()},_getData:function(){g({type:"get",url:a._getUrl,data:{id:a._id,t:(new Date).getTime()},dataType:"json",success:function(c){c.success=="true"?a._dailog(a._succTpl()):a._dailog(a._errTpl())}})}};d.on("#J_getbag","click",function(){b.check()?a._getData():b.cover()});d.delegate(document,"click","#J_bagClose",function(){window.location.reload()})},{requires:["dom","event",
"ua","ajax","overlay","assets/login/login"]});