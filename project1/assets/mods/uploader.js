/*
 * C2B Uploader
 * Author: shidu.mj@taobao.com
 * Created in 2012-06-20
 */
KISSY.add(function(S, UI, $, Y){
  
  $ = S.all, Y = YAHOO.util;
  
  var uploadCfg = {
    io: '',
    trigger: '',
    data: new Object,
    maxSize: (1024*1024),
    maxCount: 10,
    extensions: '*.*'
  }
  
  function Uploader(cfg){
    
    var th = this;
    th.cfg = S.merge(uploadCfg, cfg);
    th.cfg.trigger = S.DOM.get(th.cfg.trigger);
    th.itemList = {};
    th.succList = [];
    th._count = 0;
    th._init();
    
  }
  
  S.extend(Uploader, S.Base, {
    
    _init: function(){
      
      var th = this, ypath = 'http://a.tbcdn.cn/yui/2.7.0/build', ucs;
      if(!th.cfg.trigger) throw('The element of "trigger" must being.');
      
      ucs = [ypath+'/element/element-min.js', ypath+'/uploader/uploader-min.js'];
            
      Y.Get.script(ucs, {
        onSuccess: function(e){
          YAHOO.widget.Uploader.SWFURL = ypath+'/uploader/assets/uploader.swf';
          th.uploader = new YAHOO.widget.Uploader(th.cfg.trigger);
          console.log(th.uploader);
          th._initYUIUploader();
        }
      });
      
    },
    _initYUIUploader: function(th, ulder){
      (ulder = (th = this).uploader).on('fileSelect',function(e){
        var files = e.fileList, tmp = [];
        if(files) S.each(files, function(v){
          if(th.itemList[v.id]) return;
          if(th._count >= th.cfg.maxCount) {
          	return th.uploader.removeFile(v.id);
          }
          th.itemList[v.id] = {
            id: v.id,
            name: v.name,
            size: v.size,
            unqueue: (v.size|0) > th.cfg.maxSize
          };
          th._count++;
          tmp.push(th.itemList[v.id]);
        });
        th.fire('fileSelected', {files:tmp});
      });
      ulder.on('contentReady',function(){
        ulder.setAllowMultipleFiles(true);
        if(th.cfg.extensions == '*.*') return;
        var ff = [];
        S.each(th.cfg.extensions, function(v){
        	ff.push({description:v[0], extensions: getExtensions(v[1])});
        });
        ulder.setFileFilters(ff);
      });
      ulder.on('uploadStart', function(){
        ulder.disable();
      });
      ulder.on('uploadProgress', function(e){
      	th.fire('uploadProgress', {
          id: e.id,
          bytesLoaded: e.bytesLoaded,
          bytesTotal: e.bytesTotal
        });
      });
      ulder.on('uploadCompleteData', function(e){
        var item = th.itemList[e.id];
        item.unqueue = true;
        item.data = S.JSON.parse(e.data);
        if(item.data.status === 1) th.succList.push(item);
        th.fire('fileUploaded',{file:item});
        if(isFileListEmpty(th)){
          ulder.enable();
          th.fire('allFilesUploaded', {files:th.succList});
        } else {
          th.upload();
        }
      });
    },
    setMaxSize: function(size){
      this.maxSize = size;
    },
    setMaxCount: function(num){
      this.maxCount = num;
    },
    addUploadedFiles: function(files){
      if(!files.length) return;
      var th = this;
      S.each(files, function(v){
        v.unqueue = true;
        v.status = 1;
        th.succList.push(v);
        th.fire('fileUploaded', {data:v});
      });
      th.fire('allFilesUploaded',{data:th.succList});
    },
    move: function(id, isUp){
      var i = 0, j = 0, th = this, tmp;
      while(th.succList[i++].id != id);
      j = (--i)+(isUp?-1:1);
      tmp = th.succList.splice(i,1);
      if(!j) th.succList.unshift(tmp[0]);
      else th.succList.splice(j, 0, tmp[0]);
    },
    remove: function(id, th){
      (th = this).itemList[id] = null;
      delete th.itemList[id];
      th.uploader.removeFile(id);
      th.fire('fileRemoved');
      th._count--;
      for(var i = 0; i < th.succList.length; i++){
        if(th.succList[i].id === id){
          th.succList.splice(i, 1);
          break;
        }
      }
    },
    clearList: function(){
      var th = this;
      for(var k in th.itemList){
        th.itemList[k] = null;
        delete th.itemList[k];
        th.uploader.removeFile(k);
      }
      th.succList.length = 0;
      th._count = 0;
    },
    upload: function(th){
      var id = null, k;
      for(k in (th = this).itemList){
        if(th.itemList[k].unqueue === false){
          id = k;
          break;
        }
      }
      if(id){
        th.uploader.upload(th.itemList[id].id, th.cfg.io+'&random='+new Date().getTime(), "POST", th.cfg.data);
        th.fire('uploadStart',{file:th.itemList[id]});
      }
    }
    
  });
  
  function getExtensions(ex){
  	return ex.replace(/\s+/g,'').replace(/([^,]+)/g,"*.$1").replace(/,/g,';');
    var ret = [];
    S.each(arr, function(v,i){ ret[i] = '*.'+v; });
    return ret.join(';');
  }
  function isFileListEmpty(o){
    for(var k in o.itemList){
      if(o.itemList[k] && o.itemList[k].unqueue === false) return false;
    }
    return true;
  }
  
  return Uploader;
  
});