/**
 * @fileoverview 即将结束js
 * @author 易敛<yilian.wj@taobao.com>
 * @date 12-2-24
 */

KISSY.add('PaiLast',function(S, D, E, IO, cnd, Switchable){

    function PaiLast(){

        var url = 'http://paimai.taobao.com/json/get_ending_auction'; //即将结束接口 110.75.25.209

        //渲染数据
        function dataShow(data){
            var html = '';
            var tpl = '';
            S.each(data,function(item,num){
                //前10个写入右侧
                var title = title1 = item.title;
                if(title.length > 10){
                    title = title.substr(0,10);
                }
                if(title1.length > 13){
                    title1 = title1.substr(0,13);
                }
                if(num < 10){
                    html += '<li class="last-item" id="' + item.itemId + '">' +
                        '<a class="pic" href="http://detail.taobao.com/item.htm?id=' + item.itemId + '" target="_blank">' +
                        '<img src="' + item.picUrl + '_120x120.jpg" alt="">' +
                        '</a>' +
                        '<a href="" class="title" target="_blank">' + title + '</a>' +
                        '<div class="price">' +
                        '<em class="rmb">&yen</em>' +
                        '<em class="J_CurrentPrice">' + item.currentPrice + '</em>' +
                        '</div>' +
                        '<div class="time">' +
                        '<s class="big-clock"></s>' +
                        '<span class="J_time">' +
                        '<var>00</var>:' +
                        '<var>00</var>:' +
                        '<var>00</var>' +
                        '</span>' +
                        '</div>' +
                        '</li>';
                }else if(num >= 10){
                    tpl += '<li class="more-item" id=' + item.itemId + '>' +
                        '<a class="name" href="http://detail.taobao.com/item.htm?id=' + item.itemId + '">' + title1 + '</a>' +
                        '<div class="sau">' +
                        '<span class="time">' +
                        '<s class="small-clock"></s>' +
                        '<b class="J_time">' +
                        '<var>00</var>:' +
                        '<var>00</var>:' +
                        '<var>00</var>' +
                        '</b>' +
                        '</span>' +
                        '<span class="price">' +
                        '<em class="rmb">&yen;</em>' +
                        '<strong>' + item.currentPrice + '</strong>' +
                        '</span>' +
                        '</div>' +
                        '</li>';
                }
            });
            D.css('#J_lastleft','top','0');
            D.html('#J_lastright',html);
            D.html('#J_lastleft',tpl);
        }

        function jsonpCallback(url,fn){
            IO({
                dataType : 'jsonp',
                url: url,
                data:{
                  t : new Date().getTime()
                },
                jsonpCallback : 'end',
                success : function(data){
                    fn(data);
                }
            });
        };

        jsonpCallback(url,jsonShow);

        function jsonShow(data){
            dataShow(data);
            //console.log(data);
            //竞拍倒计时
            S.each(data,function(item, i){
                var id = item.itemId;
                var left_time = item.leftTime;

                var c = new cnd({
                    element: '#' + id + ' .J_time',
                    format: 'h,i,s',
                    leftTime: left_time,
                    onProcess: function(n){
                        if(!i && n <= 0 ){
                            s.stop();
                            c.destroy();
                            c = null;

                           D.html("#J_lastleft",'');
                            jsonpCallback(url,jsonShow);
                        }
                    }
                });
            });

            var CON_MORE = '#J_MoreCon', EL_MORE_LIST = 'more-con';
            var Slide = Switchable.Slide;
            var s = Slide(CON_MORE,{
                contentCls : EL_MORE_LIST,
                hasTriggers : false,
                effect : 'scrolly',
                easing: 'easeOutStrong',
                interval: 2,
                duration: .2
            });

        }

        /* 建立长链接 跟新商品信息 */

            //获取需要更新的商品id
            var long_ids = [],long_temp_ids = [];
            var recom_ids = S.query('#J_recom .pai-recommend-item');
            S.each(recom_ids,function(item,n){
                long_ids[n] = D.attr(item,'id');
            });
            var limit_ids = S.query('#J_limcon .pai-limit-item');
            S.each(limit_ids,function(item,n){
                long_temp_ids[n] = D.attr(item,'id');
            });
            long_ids = long_ids.concat(long_temp_ids);
            //console.log(long_ids);
            window.g_config = {appId:1009,itemId: long_ids};
            function updateSAU(data) {
                if(data == undefined) return;   //没有更新则返回
                //console.log(data);
                //根据id更新价格和出价次数
                var item_id = data.itemId;
                var price = data.price;
                var counts = data.totalCnt;
                D.html('#' + item_id + ' .lp',price);
                D.html('#' + item_id + ' .lc',counts);
            }
            var longlivedURL = 'http://a.tbcdn.cn/p/tstart/1.0/build/tb-mpp-min.js?t=20110920.js';
            S.getScript(longlivedURL, function() {
                if (!g_config) return;
               Mpp.Notify.register({appId:g_config.appId, type:1, callback:updateSAU});
            });

    }
     return PaiLast;
},{requires:['dom','event','ajax','Countdown','switchable']});