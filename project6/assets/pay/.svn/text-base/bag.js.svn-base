/**
 * 合买版detail页面 领红包
 * @Author: wb-jiangfeng
 * @Time: 12-11-1 13:53
 * @Param:
 */

KISSY.add(function(S, D, E, UA, IO, O, Login) {
  var bag = {
    _id: D.val('#reqId'),  // 获取活动id
    _backUrl: Login._daily() ? 'http://hm.daily.taobao.net/group/group_detail.htm?id=' : 'http://hm.taobao.com/group/group_detail.htm?id=',
    _getUrl: Login._daily() ? 'http://hm.daily.taobao.net/json/send_red_gen.htm' : 'http://hm.taobao.com/json/send_red_gen.htm',
    _succTpl: function(){
      var tpl =  '<div class="c2b-bag-overlay">' +
                  '<span class="bagclose" id="J_bagClose">\u5173\u95ed</span>' +
                  '<i></i>' +
                  '<div class="bag-info">' +
                    '<p>\u606d\u559c\u60a8\uff0c\u62a2\u5230<span class="bag-money">5</span>\u5143\u9650\u91cf\u7ea2\u5305</p>' +
                    '<div class="bag-btn">' +
                      '<a href="' + bag._backUrl + bag._id + '" class="back-info">回合买详情页</a>' +
                      '<a href="https://hongbao.alipay.com/coupon/index.htm" class="pay-view">去支付宝看看</a>' +
                    '</div>' +
                  '</div>' +
                '</div>';
      return tpl;
    },
    _errTpl: function(){
      var tpl =  '<div class="c2b-bag-overlay">' +
                    '<span id="J_bagClose" class="bagclose">\u5173\u95ed</span>' +
                    '<i class="noe"></i>' +
                    '<div class="bag-info">' +
                      '<p>\u5f88\u9057\u61be\uff0c\u60a8\u6ca1\u62a2\u5230\u7ea2\u5305~</p>' +
                      '<div class="bag-btn" style="padding-left:60px">' +
                        '<a href="' + bag._backUrl + bag._id + '" class="back-info">回合买详情页</a>' +
                      '</div>' +
                    '</div>' +
                  '</div>';
      return tpl;
    },
    _dailog: function(cnt){
      var dialog = new O.Dialog({
        width:550,
        elCls: 'baglay',
        elStyle:{
            position: UA.ie == 6 ? "absolute" : "fixed"
        },
        bodyContent: cnt,
        mask: true,
        zIndex: 10010,
        align: {
            points: ['cc', 'cc']
        },
        closable:false,
        closeAction:"destroy"
      });
      dialog.show();
      // E.undelegate(document, 'click', '#J_bagClose');
      // E.delegate(document, 'click', '#J_bagClose', function(){
      //   dialog.destroy();
      // });
      // function overlayClose(){
      //   window.location.reload();
      //   dialog.destroy();
      //   // 关闭时刷新本页面
      //   window.location.reload();
      // }
      // E.delegate('#J_tender','click','a.close',overlayClose);
    },
    _getData: function(){
      IO({
        type:"get",
        url:bag._getUrl,
        // url:'http://jfengsky.daily.taobao.net/c2bmarket/merger/php/pay/bag.json',
        data:{
          id: bag._id,
          t:new Date().getTime()
        },
        dataType:'json',
        success:function(data){
          var result = data.success;
          // console.log(result);
          if(result == 'true'){
            bag._dailog(bag._succTpl());
          }else{
            bag._dailog(bag._errTpl());
          }
        }
      });
    }
  };
  // E.on('#J_getbag', 'click', bag._getData);
  E.on('#J_getbag', 'click', function(){
    //console.log(Login.check());
    if(Login.check()){
      bag._getData();
    }else{
      Login.cover();
    }
  });
  // 关闭弹出窗口时刷新页面
  E.delegate(document, 'click', '#J_bagClose', function(){
    window.location.reload();
  });
}, {
    requires: ['dom', 'event', 'ua','ajax', 'overlay', 'assets/login/login']
});