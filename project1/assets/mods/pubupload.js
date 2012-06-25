/*
 * C2B Uploader
 * Author: shidu.mj@taobao.com
 * Created in 2012-06-20
 */
KISSY.add(function(S, ULD){
    var path = location.href.substr(0,location.href.lastIndexOf('/'));
    var $ = S.all;
    var STATUS = {
        'READY': '<span class="up-load">(等待上传...)</span>',
        'LOADING': '<span class="up-ing">(上传中...)</span>',
        'SUCCESS': '<span class="up-suc"></span>',
        'FAILURE': '<span class="up-err">文件大小不能超过3MB</span>'
    }
    var uploader = new ULD({
        trigger: '#J_SelectFiles',
        io: path+'/uploadFile.php?_input_charset=utf-8',
        data: {
            userId: 1234567890123,
            taskId: 9876543210
        },
        maxSize: 1*1024*1024,
        maxCount: 5,
        extensions: [ ['files','jpg,jpeg,png,gif,bmp,doc,xls,pdf,docx,xlsx,pptx,txt,ppt,rar,zip'] ]
    });
    uploader.on('fileSelected',function(e){
        var files = e.files, str = '';
        S.each(files, function(v,b){
            b = !v.unqueue;
            str += '<li id="J_'+v.id+'">'+
                '<span class="file-name">'+v.name+'</span>'+
                '<span class="file-status">'+(b?STATUS.READY:STATUS.FAILURE)+' </span>'+
                '<span class="file-progress">'+(b?'0%':'')+' </span>'+
                '<span class="file-remove"> 删除</span>'+
                '</li>';
        });
        $('#J_FileList').append(str);
        this.upload();
    });
    uploader.on('uploadStart',function(e){
        var itemEl = $('#J_'+e.file.id);
        itemEl.all('.file-status').html(STATUS.LOADING);
        itemEl.all('.file-remove').hide();
    });
    uploader.on('uploadProgress', function(e){
        var itemEl = $('#J_'+e.id), per = Math.round(100*(e.bytesLoaded/e.bytesTotal));
        itemEl.all('.file-progress').html(per+'%');
    });
    uploader.on('fileUploaded', function(e){
        var itemEl = $('#J_'+e.file.id);
        itemEl.all('.file-status').html(STATUS.SUCCESS);
        itemEl.all('.file-progress').hide();
        itemEl.all('.file-remove').show();
    });

    $('#J_FileList').on('click', function(e){
        var el = e.target,
            fileId = (el.tagName == 'LI' ? $(el) : $(el).parent('li')).attr('id').replace('J_','');
        if(el.className == 'file-remove'){
            uploader.remove(fileId);
            $(el).parent().remove();
        }
    });

},{requires:['assets/mods/uploader']});
