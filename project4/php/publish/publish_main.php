<?PHP
/**
 * �����Ӧ����� ��Ŀ����������
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-17 15:21
 * @return: 
 */
?>
<div class="publish">
	<div class="left">
		<!-- һ�仰���� -->
		<div class="title">
			<h3>һ�仰���������Ŀ</h3>
			<div class="count">
				<input type="text" name="" id="">
				<em><span>0</span>/30</em>
			</div>
			<span class="pub-err">�����ѳ���30����</span>
		</div>
		<!-- ��Ŀʾ��ͼ -->
		<div class="pic">
			<h3>��Ŀʾ��ͼ</h3>
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
    					data-auth='{"require":[true,"���������ϴ�1��ͼƬ��"],
    						"max":[1, "����ϴ�{max}��ͼƬ��"],
    						"maxSize":[3072, "ͼƬ��СΪ{size}��ͼƬ̫��"],
    						"allowRepeat":[false, "��ͼƬ�Ѿ����ڣ�"],
    						"allowExts":[{"desc":"JPG,PNG,GIF", "ext":"*.jpg;*.png;*.gif"},
    						"��֧��{ext}��ʽ��ͼƬ�ϴ���"]}'
    					class="upload-btn">
    					���
    				</a>
					<em>֧��jpg��png��gif��������3MB</em></br>
    				<ul id="J_UploaderQueue"></ul>
    			</div>
			<!-- <input type="file" name="" id=""> -->
			<span class="pub-err">ͼƬ��ʽ����</span>
			
		</div>
		<!-- ����Ԥ�� -->
		<div class="budget">
			<h3>����Ԥ��</h3>
			<div class="mn">
				<input type="text" class="money">
			</div>
			<em>��Ŀ��Ԥ��Ӧ��������Ŀ���вɹ����ʵ�Ԥ���ܺ�</em>
			<span class="pub-err">Ԥ�����Ϊ��</span>
		</div>
		<!-- Ͷ������ -->
		<div class="votetime">
			<h3>����Ͷ������</h3>
			<input type="text" name="" id="">
			<span class="pub-err">Ͷ����������Ϊ��</span>
		</div>
		<!-- �б����� -->
		<div class="votetime recruit">
			<h3>��Ա��ļ����</h3>
			<input type="text" name="" id="">
			<span class="pub-err">��ļ��������Ϊ��</span>
		</div>
		<!-- ��Ŀ��Ƶ��ַ -->
		<div class="video">
			<h3>��Ŀ����</h3>
			<input type="text" name="" id="">
			<a href="#" target="_blank">ȥ�ϴ���Ƶ</a>
			<em>(��ѡ) �����ύһ�μ����ӵ�������Ƶ�������ô�Ҹ��õ��˽������Ŀ</em>
		</div>
		<!-- ��ϸ���� -->
		<div class="edit">
			<div class="editmore">
	            <a id="J_showedit" class="showedit" href="javascript:void(0)"><em>չ���༭ѡ��</em><span></span></a>
	            <a id="J_editmodel" class="blue" href="javascript:void(0)">����������ôд</a>
	        </div>
			<textarea id="editor" style="width:540px"></textarea>
		</div>
		<!-- ����Э�� -->
		<div class="pub-age">
			<input type="checkbox" id="J_pack"> ���Ѿ��Ķ���ͬ��<a href="#" target="_blank">���Ա��������Ӧ����Э�顷</a>
			<span class="pub-err">��ȷ�ϲ��Ķ���ͬ�⡶�Ա��������Ӧ����Э�顷</span>
		</div>
		<div class="form-sub">
			<input type="button" class="sub" value="��һ��">
			<span class="subing" style="display:none">�ύ��...</span>
		</div>
	</div>
	<div class="right">
		
	</div>

</div>
