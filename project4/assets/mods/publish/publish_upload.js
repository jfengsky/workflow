/**
 * 有求必应公益版 发布页面图片上传功能
 * @Author: jiangfeng
 * @Time: 12-7-24 09:35
 * @Param:
 *  
 * @Return:
 *
 */
KISSY.add(function(S, D, E, IO, RenderUploader) {

	var ru = new RenderUploader('#J_UploadBtn', '#J_UploaderQueue');
    ru.on("init", function (ev) {
        var uploader = ev.uploader;
        uploader.on('success', function (ev) {
            var index = ev.index, file = ev.file,result = ev.result;
            if(result.status == 1){
                //以；号隔开上传编号
                var temp_attach = D.val('#J_attach');
                temp_attach = temp_attach + ';' + result.data.id;
                D.val('#J_attach',temp_attach);
                //li上写入id用于删除
                var updata_list = S.query('#J_UploaderQueue li');
                D.attr(updata_list[updata_list.length-1],'data-id',result.data.id);
            }

        });
        uploader.on('error', function (ev) {
            var result = ev.result;
            if(result.message){
                alert('error! ' + result.message);
            }
        });

		// updated by 千钧
        var uploaderLis = S.query('#J_UploaderQueue li');
        S.each(attachDataIds, function(id, index) {
        	D.attr(uploaderLis[index], 'data-id', id);
        });
    });

    /**
     * 删除上传附件
     */
    E.delegate('#J_UploaderQueue','click','.success-status a',function(ev){
        if(D.attr(ev.target,'href') == '#fileDel'){
            var ev_parent = D.parent(ev.target,'li');
            var sendURL = D.val('#J_delAttachUrl');
            IO({
                type:'post',
                url:sendURL + D.attr(ev_parent,'data-id'),
                //success:function(data){},
                dataType:'json'
            });
        }
    });














}, {
    requires: ['dom', 'event','ajax','gallery/form/1.2/uploader/index', 'sizzle']
});