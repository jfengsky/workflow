/**
 * Created by IntelliJ IDEA.
 * User: wb-jiangfeng
 * Date: 12-3-5
 * Time: 下午2:55
 * 焦点图下面推荐拍卖商品
 */

KISSY.add('PaiRecommend',function(S, D, IO, cnd){
    return function(){
        //获取商品ID
        var ids = S.query('#J_recom .pai-recommend-item');
        //var now_price = S.query('#J_recom .recom_price');
        var url = 'http://paimai.taobao.com/json/get_sau.htm';  //通用接口
        //var url = 'http://paimai.taobao.com/json/get_ending_auction.htm'; //人气拍接口
        var item_id = '';

        S.each(ids,function(item, num){
            var temp_id = D.attr(ids[num],'id');
            item_id = item_id + ',' + temp_id;
        });
        item_id=item_id.substring(1,item_id.length);

        /**
         *  按钮状态函数
         *  所有按钮默认为即将竞拍
         *  0：即将竞拍
         *  1：开始竞拍
         *  2：竞拍结束
         */
        function btnType(id, el){
            if(el == 1){
                D.addClass('#' + id + ' a.wil','auc');
                D.removeClass('#' + id + ' a.auc','wil');
            }else if(el == 2){
                D.addClass('#' + id + ' a.wil','fih');
                D.removeClass('#' + id + ' a.fih','wil');
                D.addClass('#' + id + ' a.auc','fih');
                D.removeClass('#' + id + ' a.fih','auc');
            };
        }

        var state = 0; //拍卖状态 0：结束  1：即将竞拍 2：正在竞拍
        /**
         *
         *  @param st   state 拍卖状态 0：结束  1：即将竞拍 2：正在竞拍
         *  @param id   商品ID
         *  @param el   结束时间 即将竞拍
         *  @param ed   结束时间 即将结束，正在竞拍的商品为 0
         */

        function timeShow(st, id, el, ed){
            new cnd({
                element: '#' + id + ' .J_recomTime',
                format: 'd,h,i,s',
                leftTime: el,
                onProcess: function(n){
                    if(st && n <= 0){
                        if(st == 1){
                            //console.log('切换到正在竞拍倒计时');
                            st = 2;  //修改状态，以后不执行这个if
                            if(ed != 0){    //如果有竞拍结束
                                this.setLeftTime(ed);
                            }
                            //修改按钮状态
                            btnType(id, 1);
                        }else if(st == 2){
                            //console.log('竞拍结束了');
                            st = 0;
                            btnType(id, 2); //修改按钮状态
                            D.remove('#' + id + ' .ms');    //移除毫秒倒计时
                        }
                    }
                }

            });
            //添加毫秒倒计时图片
            var ms_img = '<img src="http://img02.taobaocdn.com/tps/i2/T1wcOZXglXXXXXXXXX-8-9.gif">';
            D.html('#' + id + ' .ms',ms_img);
        }


        IO({
            dataType : 'jsonp',
            url : url,
            data : {
                itemIds:item_id
            },
            jsonpCallback : 'recomback',
            success : function(data){
                /** 返回的参数
                 *  currentPrice : 当前价格
                 *  leftTime : 剩余时间(距离结束)
                 *  itemId
                 *  timeToStart ： 剩余时间(距离开拍)
                 */

                S.each(data,function(item){
                    var start_time = item.timeToStart; //剩余时间(距离开拍)
                    var end_time = item.leftTime; //剩余时间(距离结束)
                    var show_time = 0; //临时倒计时参数
                    var ID = item.itemId; //商品ID

                    //修改当前价格
                    D.html('#' + ID + ' .recom_price',item.currentPrice);

                    //开拍状态判断
                    if(start_time >= 0){    //即将开始
                        //console.log('即将开始');
                        state = 1;
                        show_time = start_time;
                        timeShow(state, ID, show_time, end_time);
                    }else if(end_time <= 0){ //已经结束
                        //console.log('已经结束');
                        D.addClass('#' + item.itemId + ' a.wil','fih');
                        D.removeClass('#' + item.itemId + ' a.fih','wil');
                    }else if(start_time < 0 && end_time > 0){
                        //console.log('正在拍');
                        btnType(ID, 1);    //修改按钮状态
                        state = 2;
                        show_time = end_time;
                        timeShow(state, ID, show_time, 0);
                        //距离结束倒计时
                    }
                });
            }
        });
    };
},{requires:['dom','ajax','Countdown']});