/**
 * 合买版detail页面 商品详情tab效果和伸缩展示 宝贝描述
 * @Author: wb-jiangfeng
 * @Time: 2012-10-27 11:40
 * @Param:
 */
KISSY.add(function(S, D, E, IO) {
    //请求宝贝描述
    var temp_url = D.val('#J_desc');
    if(temp_url != ''){
      window['callback'] = function(data){
        D.html('#J_editor',data.toString());
      };
      try{
        IO({
          type:'get',
          url:temp_url,
          dataType:'jsonp'
        });
      }catch(e){}
    }

    
    //展开详情
    E.on('#J_showinfos','click',function(){
      D.removeAttr('#J_itemcnt', 'style');
      D.hide('#J_showinfos');
    });
}, {
    requires: ['dom','event', 'ajax']
});