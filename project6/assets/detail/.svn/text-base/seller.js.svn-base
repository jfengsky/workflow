/**
 * 合买版detail页面 卖家投标效果
 * @Author: wb-jiangfeng
 * @Time: 2012-10-27 11:40
 * @Param:
 */

KISSY.add(function(S, D, E, UA, O, IO, Login) {
  //当 J_isSeller 为true 默认展示投标窗口
  var show_tag = false,
      sellerbid = {
        _show: function(){
          D.show('#J_bidbtn');
          D.show('#J_bidtips');
          D.removeClass('.c2b-seller-bid', '.c2b-bid-up');
          show_tag = true;
        },
        _hide: function(){
          D.hide('#J_bidbtn');
          D.hide('#J_bidtips');
          D.addClass('.c2b-seller-bid', '.c2b-bid-up');
          show_tag = false;
        }
      },
      default_show = D.val('#J_isSeller');

  if(default_show == 'true'){
    sellerbid._show();
  }
  E.on('#J_bidshow','click',function(){
    if(show_tag){
      sellerbid._hide();
    }else{
      sellerbid._show();
    }
  });

  // function Overlayer(title,cnt,elcs,color,des){
  //   var self = this;
  //   this.content = '<div class="tender" id="J_tender">' +
  //           '<div class="title ' + color + '">' +
  //               '<b>'+ title +'</b>' +
  //               '<a class="close" href="javascript:void(0)">关闭</a>' +
  //           '</div>' + cnt +
  //       '</div>';
  //   this.show = function(){
  //     var dialog = new O.Dialog({
  //       width:530,
  //       elCls: elcs,
  //       elStyle:{
  //         position: UA.ie == 6 ? "absolute" : "fixed"
  //       },
  //       bodyContent: self.content,
  //       mask: true,
  //       zIndex: 10010,
  //       align: {
  //           points: ['cc', 'cc']
  //       },
  //       closable:false,
  //       closeAction:"destroy"
  //     });
  //     dialog.show();
  //     function overlayClose(){
  //       S.later(function(){
  //           dialog.destroy();
  //       },50);
  //     }
  //     E.delegate('#J_tender','click','a.close',overlayClose);
  //     E.delegate('#J_tender','click',des,overlayClose);
  //   };
  // }

  // //卖家投标操作
  // var tpl = D.html('#J_selleroverlay'),
  //     product_overlay = new Overlayer('卖家投标', tpl, 'bidseller', 'blue');
  // E.on('#J_tobid','click',function(){
  //   if (!Login.check()) {
  //     Login.cover();
  //   } else {
  //     product_overlay.show();
  //   }
  // });

}, {
    requires: ['dom','event','ua','overlay' , 'ajax', 'assets/login/login', 'sizzle']
});