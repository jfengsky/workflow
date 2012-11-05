/**
 * 合买版detail页面 发起人合买和热门合买
 * @Author: wb-jiangfeng
 * @Time: 2012-10-27 11:40
 * @Param:
 */

KISSY.add(function(S, D, E, IO, Login) {
  // 发起人id J_publisherId
  var leaderlist = {
    leaderpage:1,
    popage:1,
    leaderId: D.val('#J_publisherId'),
    groupId: D.val('#J_groupId'),
    /**
     * [leaderTpl description]
     * @param  {boolean} bool     [是否pop 用于显示序号]
     * @param  {number} num       [序号,热门商品才有]
     * @param  {number} id       [合买id]
     * @param  {string} img      [商品图片]
     * @param  {string} title    [商品标题]
     * @param  {string} newprice [商品现在价格]
     * @param  {string} oldprice [商品原来价格]
     * @return {string}          [返回模板]
     */
    leaderTpl: function(bool, num, id, img, title, newprice, oldprice){
      var daily_url = 'http://hm.taobao.com/group/group_detail.htm?id=',
      rank = '';
      if(bool){
        rank = '<i>' + (num + 1) + '</i>';
      }
      if(Login._daily()){
        daily_url = 'http://hm.daily.taobao.net/group/group_detail.htm?id=';
      }
      // 如果图片地址不存在
      
      var tpl = '<li>' +
        '<div class="pic">' +
          '<a href="' + daily_url + id + '">' +
            '<img src="'+ img +'_80x80.jpg" />' +
          '</a>' + rank +
        '</div>' +
        '<a href="' + daily_url + id + '" class="title">'+ title +'</a>' +
        '<span class="g_price">' +
          '<span>&yen;</span><strong>'+ newprice +'</strong>' +
        '</span>' +
        '<div class="g_price g_price-original">' +
          '<span>&yen;</span><strong>'+ oldprice +'</strong>' +
        '</div>' +
      '</li>';
      return tpl;
    },
    leaderUrl:function(){
      return Login._daily() ? 'http://hm.daily.taobao.net/json/get_OtherGroupsOfPublisher.htm' : 'http://hm.taobao.com/json/get_OtherGroupsOfPublisher.htm';
    },
    popUrl:function(){
      return Login._daily() ? 'http://hm.daily.taobao.net/json/get_hotGroupTop3.htm' : 'http://hm.taobao.com/json/get_hotGroupTop3.htm';
    },
    getleaderData: function(fn, page){
      IO({
        type:'get',
        url:leaderlist.leaderUrl(),
        //url:'http://jfengsky.daily.taobao.net/c2bmarket/merger/php/detail/leaderlist.json',
        data:{
          publisherId:leaderlist.leaderId,
          groupId:leaderlist.groupId,
          cPage:page,
          t:new Date().getTime()
        },
        dataType:'json',
        success:function(data){
          fn(data);
        },
        error:function(){
          D.remove('#J_c2b_other');
        }
      });
    },
    getpopData: function(fn){
      IO({
        type:'get',
        url:leaderlist.popUrl(),
        //url:'http://jfengsky.daily.taobao.net/c2bmarket/merger/php/detail/hotgroup.json',
        dataType:'json',
        data:{
          t:new Date().getTime()
        },
        success:function(data){
          fn(data);
        },
        error:function(){
          D.remove('#J_c2b_hot');
        }
      });
    },
    leadershow: function(data){
      //console.log(data.otherGroups);
      var data_list = data.otherGroups,
          html = '',
          total_count = data.totalPage;
          //total_show = data.totalCnt;
      if(data_list.length <= 0){
        D.remove('#J_c2b_other');
        return;
      }
      if(leaderlist.leaderpage >= total_count){
        D.hide('#J_otherChange');
      }
      S.each(data_list,function(item, index){
        html += leaderlist.leaderTpl(false, index, item.id, item.picUrl, item.title, item.budgetPrice, item.refPrice);
      });
      D.html('#J_other', html);
      leaderlist.leaderpage++;
    },
    popshow: function(data){
      var html = '';
      if(data.length > 0){
        S.each(data,function(item, index){
          html += leaderlist.leaderTpl(true, index, item.id, item.picUrl, item.title, item.budgetPrice, item.refPrice);
        });
        D.html('#J_poplist', html);
      }else{
        D.remove('#J_c2b_hot');
      }
    }
  };
  // 获取发起人合买数据
  leaderlist.getleaderData(leaderlist.leadershow, leaderlist.leaderpage);

  E.on('#J_otherChange','click',function(){
    leaderlist.getleaderData(leaderlist.leadershow, leaderlist.leaderpage);
  });
  // 热门合买
  leaderlist.getpopData(leaderlist.popshow);
}, {
    requires: ['dom','event', 'ajax', 'assets/login/login']
});