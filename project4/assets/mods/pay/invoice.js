/**
 * 有求必应公益版 索取发票功能
 * @Author: jiangfeng
 * @Time: 12-7-24 11:38
 * @Return:
 *
 */

KISSY.add(function(S, D, E, Checkbx, Overlayer){
	//是否显示索取发票
	if(D.val('#J_needInvoice') == 'yes'){
		D.show('#J_invoice');
	}else{
		D.remove('#J_invoice');
	}

	//是否显示索取发票成功
	if(D.val('#J_invoiceRet')){
		D.show('#J_hasinvo');
	}

	//TODO 打勾显示发票
	var ticket_check = new Checkbx('#J_tickcheck',function(){
		D.show('#J_tickbox');
	},function(){
		D.hide('#J_tickbox');
	});
	ticket_check._click();

	E.on('#J_tickcrt','click',function(){
		//获取发票抬头
		var temp_top = D.val('#J_title');
		//获取寄送地址
		var temp_address = D.val('#J_address');
		//获取联系人
		var temp_user = D.val('#J_linkman');
		//获取联系电话
		var temp_phone = D.val('#J_tel');
		
		var cnt = '<div class="cnt ticket">' +
       '<ul class="" id="J_tickcnt">' +
            '<li><b>发票抬头：</b><p>' + temp_top + '</p></li>' +
            '<li><b>寄送地址：</b><p>' + temp_address + '</p></li>' +
            '<li><b>联系人：</b><p>' + temp_user + '</p></li>' +
            '<li><b>联系电话：</b><p>' + temp_phone + '</p></li>' +
            '<li><input class="tksub" id="J_textsub" value="提交" type="button"></li>' +
        '</ul>' +
        '<div class="clear"></div>' +
    '</div>';
		var over = new Overlayer('索取发票',cnt,'ticketbg');
		over.show();
		E.on('#J_textsub','click',function(){
			S.get('#J_Invoicesub').submit();
		});
	});
},{requires:['dom','event','assets/mods/checkbx','assets/mods/overlayer']});