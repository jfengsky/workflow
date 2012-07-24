<?PHP
/**
 * 有求必应公益版 资助成功页面
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-17 14:24
 * @return
 */
?>
<div class="pub-succ aid">
	<h2>
		<i></i>
		<b>发布成功!</b>
	</h2>
	<a href="#" class="vote"><span>马上去投票</span></a>
	<input type="hidden" id="J_needInvoice" value="yes" />
	<input type="hidden" id="J_invoiceRet" value="1" />
	<div class="invoice" id="J_invoice">
		<em><input type="checkbox" id="J_tickcheck"> 需要发票</em>
		<form action="http://jfengsky.daily.taobao.net/gongyi/php/aid_success.php" id="J_Invoicesub" />
		<ul id="J_tickbox" style="display:none">
			<li><label>发票抬头</label><input type="text" class="txt" id="J_title"></li>
			<li><label>寄送地址</label><input type="text" class="txt" id="J_address"></li>
			<li><label>联系人</label><input type="text" class="txt" id="J_linkman"></li>
			<li><label>联系电话</label><input type="text" class="txt" id="J_tel"></li>
			<li><a href="javascript:void(0)" class="vote" id="J_tickcrt"><span>提交</span></a></li>
		</ul>
		</form>
	</div>
	<div class="hasinvo" id="J_hasinvo" style="display:none">
		已提交发票需求，项目成功后您将在30个工作日收到捐赠票据，如果超出时限未收到可旺旺留言为您查询原因
	</div>
</div>


<script>
KISSY.config({packages:[{
	name:"assets",
	tag:"20120723",
    <?php
		//根据环境载入css
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