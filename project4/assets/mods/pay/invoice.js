/**
 * �����Ӧ����� ��ȡ��Ʊ����
 * @Author: jiangfeng
 * @Time: 12-7-24 11:38
 * @Return:
 *
 */

KISSY.add(function(S, D, E, Checkbx, Overlayer){
	//�Ƿ���ʾ��ȡ��Ʊ
	if(D.val('#J_needInvoice') == 'yes'){
		D.show('#J_invoice');
	}else{
		D.remove('#J_invoice');
	}

	//�Ƿ���ʾ��ȡ��Ʊ�ɹ�
	if(D.val('#J_invoiceRet')){
		D.show('#J_hasinvo');
	}

	//TODO ����ʾ��Ʊ
	var ticket_check = new Checkbx('#J_tickcheck',function(){
		D.show('#J_tickbox');
	},function(){
		D.hide('#J_tickbox');
	});
	ticket_check._click();

	E.on('#J_tickcrt','click',function(){
		//��ȡ��Ʊ̧ͷ
		var temp_top = D.val('#J_title');
		//��ȡ���͵�ַ
		var temp_address = D.val('#J_address');
		//��ȡ��ϵ��
		var temp_user = D.val('#J_linkman');
		//��ȡ��ϵ�绰
		var temp_phone = D.val('#J_tel');
		
		var cnt = '<div class="cnt ticket">' +
       '<ul class="" id="J_tickcnt">' +
            '<li><b>��Ʊ̧ͷ��</b><p>' + temp_top + '</p></li>' +
            '<li><b>���͵�ַ��</b><p>' + temp_address + '</p></li>' +
            '<li><b>��ϵ�ˣ�</b><p>' + temp_user + '</p></li>' +
            '<li><b>��ϵ�绰��</b><p>' + temp_phone + '</p></li>' +
            '<li><input class="tksub" id="J_textsub" value="�ύ" type="button"></li>' +
        '</ul>' +
        '<div class="clear"></div>' +
    '</div>';
		var over = new Overlayer('��ȡ��Ʊ',cnt,'ticketbg');
		over.show();
		E.on('#J_textsub','click',function(){
			S.get('#J_Invoicesub').submit();
		});
	});
},{requires:['dom','event','assets/mods/checkbx','assets/mods/overlayer']});