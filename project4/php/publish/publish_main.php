<?PHP
/**
 * 有求必应公益版 项目发主内容区
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-17 15:21
 * @return: 
 */
?>
<div class="publish">
	<div class="left">
		<!-- 一句话描述 -->
		<div class="title">
			<h3>一句话描述你的项目</h3>
			<div class="count">
				<input type="text" name="" id="">
				<em><span>0</span>/30</em>
			</div>
			<span class="pub-err">字数已超过30个字</span>
		</div>
		<!-- 项目示意图 -->
		<div class="pic">
			<h3>项目示意图</h3>
			<div class="pub-upload">
    				<a id="J_UploadBtn" href="#upload()"
    					data-config='{"type":"auto","autoUpload":"false",
    						"serverConfig":{
    						"action":"$!c2bmarketModule.setTarget('json/uploadResponse.htm').addQueryData('_input_charset', 'UTF-8')",
    						"data":{
    						"$attach.outerType.key" :"1",
    						"_tb_token_":"$!tbToken.ajaxUniqueToken",
    						"action":"uploadAction",
    						"event_submit_do_upload_attach":"1"
    						}},
    						"name":"$attach.file.key",
    						"urlsInputName":"files",
    						"restoreHook":"#J_UploaderRestore"}'
    					data-auth='{"require":[true,"必须至少上传1张图片！"],
    						"max":[1, "最多上传{max}张图片！"],
    						"maxSize":[3072, "图片大小为{size}，图片太大！"],
    						"allowRepeat":[false, "该图片已经存在！"],
    						"allowExts":[{"desc":"JPG,PNG,GIF", "ext":"*.jpg;*.png;*.gif"},
    						"不支持{ext}格式的图片上传！"]}'
    					class="upload-btn">
    					添加
    				</a>
					<em>支持jpg、png、gif，不超过3MB</em></br>
    				<ul id="J_UploaderQueue"></ul>
    			</div>
			<!-- <input type="file" name="" id=""> -->
			<span class="pub-err">图片格式不对</span>
			
		</div>
		<!-- 您的预算 -->
		<div class="budget">
			<h3>您的预算</h3>
			<div class="mn">
				<input type="text" class="money">
			</div>
			<em>项目总预算应等于子项目所列采购物资的预算总和</em>
			<span class="pub-err">预算金额不能为空</span>
		</div>
		<!-- 投标天数 -->
		<div class="votetime">
			<h3>卖家投标天数</h3>
			<input type="text" name="" id="">
			<span class="pub-err">投标天数不能为空</span>
		</div>
		<!-- 招标天数 -->
		<div class="votetime recruit">
			<h3>会员招募天数</h3>
			<input type="text" name="" id="">
			<span class="pub-err">招募天数不能为空</span>
		</div>
		<!-- 项目视频地址 -->
		<div class="video">
			<h3>项目描述</h3>
			<input type="text" name="" id="">
			<a href="#" target="_blank">去上传视频</a>
			<em>(可选) 建议提交一段几分钟的宣传视频，可以让大家更好的了解你的项目</em>
		</div>
		<!-- 详细描述 -->
		<div class="edit">
			<div class="editmore">
	            <a id="J_showedit" class="showedit" href="javascript:void(0)"><em>展开编辑选项</em><span></span></a>
	            <a id="J_editmodel" class="blue" href="javascript:void(0)">看看别人怎么写</a>
	        </div>
			<textarea id="editor" style="width:540px"></textarea>
		</div>
		<!-- 服务协议 -->
		<div class="pub-age">
			<input type="checkbox" id="J_pack"> 我已经阅读并同意<a href="#" target="_blank">《淘宝网有求必应服务协议》</a>
			<span class="pub-err">请确认并阅读并同意《淘宝网有求必应服务协议》</span>
		</div>
		<div class="form-sub">
			<input type="button" class="sub" value="下一步">
			<span class="subing" style="display:none">提交中...</span>
		</div>
	</div>
	<div class="right">
		
	</div>

</div>
