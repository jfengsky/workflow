/**
 * 合买版detail页面js配置
 * @Author: wb-jiangfeng
 * @Time: 12-10-25 10:30
 * @Param:
 */

KISSY.add(function(S, Login) {
    // login/login 登录 daily判断
    // detail/mdeal.js 顶部勋章
    // detail/item-pic.js 商品大图切换效果 取消跟单 立即购买
    // groupdown.js 倒计时效果
    // 进度条效果
    // 分享功能
    // seller.js 卖家投标
    // info.js 商品详情tab和展开收缩效果
    // page.js 翻页组件
    // comment.js 评论组件
    // leadlist.js 发起人合买数据请求 
    // hotlist.js 热门合买数据请求
    // detailbid.js 卖家投标弹层和操作
    // bidvote.js 入围弹层和操作
    // pay/bag.js 红包
}, {
    requires: ['assets/login/login','assets/detail/bidvote','assets/detail/medal','assets/detail/item-pic','assets/detail/groupdown','assets/detail/seller','assets/detail/info','assets/detail/leadlist','assets/detail/page','assets/detail/detailbid','assets/detail/comment','assets/pay/bag']
});

KISSY.use("gallery/countdown/1.2/index",function(S, Countdown){
    S.all('#J_countdown .cd').each(function(node) {
        Countdown(node, {
            effect: 'slide',
            _clock: ['d', 100, 2, 'h', 100, 2, 'm', 60, 2, 's', 60, 2, 'u', 10, 1]
        });
    });
});