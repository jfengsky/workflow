/**
 * Created by IntelliJ IDEA.
 * User: wb-jiangfeng
 * Date: 12-3-6
 * Time: 下午2:06
 * 首页人气拍品
 */

KISSY.add('PaiHot',function(S, D, IO, cnd){
    return function(){
        var url = 'http://paimai.taobao.com/json/get_hotest_auction';  //人气拍接口

        function dataShow(data){
            //取前5个 其实就返回5个
            var html = '';
            S.each(data,function(item){
                var title = item.title;
                if(title.length > 10){
                    title = title.substr(0,10);
                }
                html += '<li class="hot-item">' +
                    '<a class="pic" href="http://detail.taobao.com/item.htm?id=' + item.itemId + '" target="_blank">' +
                    '<img src="' + item.picUrl + '_120x120.jpg" alt="">' +
                    '</a>' +
                    '<a href="http://detail.taobao.com/item.htm?id=' + item.itemId + '" class="title" target="_blank">' + title + '</a>' +
                    '<div class="sau">' +
                    '<div class="current">' +
                    '<span class="label">当前价格</span>: ' +
                    '<span class="price">' +
                    '<em class="rmb">&yen;</em>' +
                    '<em class="J_CurrentPrice">' + item.currentPrice + '</em>' +
                    '</span>' +
                    '</div>' +
                    '<div class="bidCount">' +
                    '<span class="label">出价次数</span>: ' +
                    '<span><em class="J_AuctionCount">' + item.totalCnt + '</em>次</span>' +
                    //'<span><em class="J_AuctionCount">' + item.totalCnt + '</em>次</span>' +
                    '</div>' +
                    '</div>' +
                    '</li>';
            });
            D.html('#J_hot',html);
        }

        function jsonpCallback(url,fn){
            IO({
                dataType : 'jsonp',
                url: url,
                data:{
                    t : new Date().getTime()
                },
                jsonpCallback : 'recomback',
                success : function(data){
                    fn(data);
                }
            });
        };

        jsonpCallback(url,jsonShow);

        function jsonShow(data){
            dataShow(data);
            S.each(data,function(item, i){
                var id = item.itemId;
                var left_time = item.leftTime;

                var c = new cnd({
                    format: 'h,i,s',
                    leftTime: left_time,
                    onProcess: function(n){
                        if(!i && n <= 0 ){
                            c.destroy();
                            c = null;
                            jsonpCallback(url,jsonShow);
                        }
                    }
                });
            });
        }
    }
},{requires:['dom','ajax','Countdown']});