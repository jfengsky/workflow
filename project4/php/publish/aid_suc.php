<?PHP
/**
 * �����Ӧ����� �����ɹ�ҳ��
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-17 14:24
 * @return
 */
?>
<div class="pub-succ aid">
	<h2>
		<i></i>
		<b>�����ɹ�!</b>
	</h2>
	<a href="#" class="vote"><span>����ȥͶƱ</span></a>
	<input type="hidden" id="J_needInvoice" value="yes" />
	<input type="hidden" id="J_invoiceRet" value="1" />
	<div class="invoice" id="J_invoice">
		<em><input type="checkbox" id="J_tickcheck"> ��Ҫ��Ʊ</em>
		<form action="http://jfengsky.daily.taobao.net/gongyi/php/aid_success.php" id="J_Invoicesub" />
		<ul id="J_tickbox" style="display:none">
			<li><label>��Ʊ̧ͷ</label><input type="text" class="txt" id="J_title"></li>
			<li><label>���͵�ַ</label><input type="text" class="txt" id="J_address"></li>
			<li><label>��ϵ��</label><input type="text" class="txt" id="J_linkman"></li>
			<li><label>��ϵ�绰</label><input type="text" class="txt" id="J_tel"></li>
			<li><a href="javascript:void(0)" class="vote" id="J_tickcrt"><span>�ύ</span></a></li>
		</ul>
		</form>
	</div>
	<div class="hasinvo" id="J_hasinvo" style="display:none">
		���ύ��Ʊ������Ŀ�ɹ���������30���������յ�����Ʊ�ݣ��������ʱ��δ�յ�����������Ϊ����ѯԭ��
	</div>
</div>


<script>
KISSY.config({packages:[{
	name:"assets",
	tag:"20120723",
    <?php
		//���ݻ�������css
		if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
	        echo 'path:"http://jfengsky.daily.taobao.net/gongyi/"';
	    }else{
	        echo 'path:"http://a.tbcdn.cn/apps/c2bmarket/gongyi/"';
	    }
	?>
	}]
});
KISSY.use('assets/pay');
</script>