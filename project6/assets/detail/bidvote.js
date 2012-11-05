/**
 * 有求必应公益版 买家投票操作
 * @Author: jiangfeng
 * @Time: 12-7-27 11:13
 * @Param:
 *
 */
KISSY.add(function(S, D, E,IO,Overlayer) {
	var Tplmode = {
        finalistTpl:function(el){
            var tpl = '<div class="cnt vote-cnt">' + '<div class="vote-reason"><label>入围理由:</label><textarea id="J_finalistArea" name="_fm.s._0.m"></textarea></div>' + '<div class="cnt-btn">' + '<a href="javascript:void(0)" class="crt" id="J_finalistfine" reqid="' + el.req_id + '" bidid="' + el.bid_id + '">确定</a>' + '<a href="javascript:void(0)" class="cle">取消</a>' + '</div>' + '</div>';
            return tpl;
        },
        foxproTpl:function(el){
            var tpl = '<div class="cnt vote-cnt">' + '<h2 style="text-align:center;">是否确认取消入围？</h2>' + '<div class="cnt-btn">' + '<a href="javascript:void(0)" class="crt" id="J_cancelFinalist" reqid="' + el.req_id + '" bidid="' + el.bid_id + '">确定</a>' + '<a href="javascript:void(0)" class="cle">取消</a>' +  '</div>' + '</div>';
            return tpl;
        }
	};
    /* 入围*/
    E.on('.bid-add', 'click', function(ev) {
        //弹出确认浮层
		var req_id= D.attr(ev.target,'reqid'),bid_id= D.attr(ev.target,'bidid');
        var vote_overlay = new Overlayer('添加入围', Tplmode.finalistTpl({"req_id":req_id,"bid_id":bid_id}), 'bidvote', 'f60', 'a.cle');
        vote_overlay.show();
    });
    var _daily = function(){
        var url = document.location.href;   //获取页面URL地址
        var reg = /(.daily.taobao.net)/i;
        return reg.test(url);
    };
    E.delegate(document, 'click', '#J_finalistfine', function(ev) {
        var req_id= D.attr(ev.target,'reqid'),bid_id= D.attr(ev.target,'bidid'),post_data={},
        url='http://hm.taobao.com/json/finalist.htm?action=FinalistAction&event_submit_do_select=1&req_id='+req_id+'&bid_id='+bid_id;
        if(_daily()){
            url = 'http://hm.daily.taobao.net/json/finalist.htm?action=FinalistAction&event_submit_do_select=1&req_id='+req_id+'&bid_id='+bid_id;
        }
		post_data['memo']=encodeURIComponent(D.val('#J_finalistArea'));
        IO({
            type:'post',
            dataType:'json',
            url:url,
			data:post_data,
            success: function(data){
                if(data.status==1){
                    document.location.reload();
                }else{
                    alert(data.message);
                }
            },
            error:function(){
                alert("出错了");
            }
        });
    });
	// 取消入围
    E.on('.bid-cancel', 'click', function(ev) {
        //弹出确认浮层
		var req_id= D.attr(ev.target,'reqid'),bid_id= D.attr(ev.target,'bidid');
        var vote_overlay = new Overlayer('取消入围', Tplmode.foxproTpl({"req_id":req_id,"bid_id":bid_id}), 'bidvote', 'f60', 'a.cle');
        vote_overlay.show();
    });
	E.delegate(document, 'click', '#J_cancelFinalist', function(ev) {
        var req_id= D.attr(ev.target,'reqid'),bid_id= D.attr(ev.target,'bidid'),
        url='http://hm.taobao.com/json/finalist.htm?action=FinalistAction&event_submit_do_cancel=1&req_id='+req_id+'&bid_id='+bid_id;
        if(_daily()){
            url = 'http://hm.daily.taobao.net/json/finalist.htm?action=FinalistAction&event_submit_do_cancel=1&req_id='+req_id+'&bid_id='+bid_id;
        }
        IO({
            type:'post',
            dataType:'json',
            url:url,
            success: function(data){
                if(data.status==1){
                    document.location.reload();
                }else{
                    alert(data.message);
                }
            },
            error:function(){
                alert("出错了");
            }
        });
    });
}, {requires: ['dom','event','ajax','assets/mods/overlayer','sizzle']});