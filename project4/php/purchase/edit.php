<?PHP
/**
 * 有求必应公益版 编辑添加采购需求列表
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-17 19:55
 * @return: 
 */
?>
<div class="pru-edit">
	<h3>填写采购清单</h3>
	<ul>
		<li>
			<label>一句话描述</label>
			<div class="count">
				<input type="text">
				<em><span>0</span>/30</em>
			</div>
		</li>
		<li class="pay">
			<label>预算金额</label>
			<input type="text" name="" id="">
		</li>
		<li class="edt">
			<label>招标说明</label>
			<div class="editmore">
	            <a id="J_showedit" class="showedit" href="javascript:void(0)"><em>展开编辑选项</em><span></span></a>
	            <a id="J_editmodel" class="blue" href="javascript:void(0)">使用需求模板</a>
	        </div>
			<textarea></textarea>
		</li>
		<li>
			<label>默认竞标条件</label>
			<ul class="check">
				<li><input type="checkbox" name="" id=""> 集市消保保证金卖家</li>
				<li><input type="checkbox" name="" id=""> 天猫卖家</li>
				<li><input type="checkbox" name="" id=""> 实物与描述一致 > 4.6分</li>
			</ul>
		</li>
	</ul>
	<input type="button" class="sub" value="保存">
	<p class="err">中标后，系统自动生成有求必应价，购买完成交易成有求必应价。</p>
</div>