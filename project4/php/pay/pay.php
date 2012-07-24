<?PHP
/**
 * 有求必应公益版 冻结支付页面
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-18 14:55
 * @return: 
 */
?>
<div class="pay">
	<ul>
		<li>
			<label>付款方式：</label>
			<div class="alipay">
				资助善款将冻结在您的支付宝账户内，项目成功后用于中标商品采购 <a href="#" target="_blank">索取发票</a>
			</div>
		</li>
		<li>
			<label>付款金额：</label>
			<b>1.00</b>
		</li>
		<li>
			<label>捐款份数：</label>
			<input type="text" class="num" id="J_number">
		</li>
		<li>
			<div class="total">
				需支付总金额 <b>￥<span id="J_payshow">1</span></b> 元
				<input type="hidden" id="J_total">
			</div>
		</li>
		<li>
			<input type="button" class="sub" value="去支付宝冻结">
		</li>
	</ul>
</div>