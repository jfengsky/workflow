/**
 *
 * 限时拍
 *
 */



KISSY.add('PaiLimit',function(S, D, E, IO, cnd){
    return function(){
        var url = 'http://paimai.taobao.com/json/get_sau.htm';

        //获取商品ID
        var ids = S.query('#J_limcon .pai-limit-item');
        //var now_price = S.query('#J_limcon .limit_price');  //当前价格
        var now_num = S.query('#J_limcon .limit_num');  //出价次数

        var item_id = '';
        S.each(ids,function(item, num){
            var temp_id = D.attr(ids[num],'id');
            item_id = item_id + ',' + temp_id;
        });
        item_id = item_id.substring(1,item_id.length);
        //请求数据

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

        //竞拍已经结束 修改文字和时间
        function hasFinish(id,el){
            //修改 “剩余时间” 为 “结束时间”
            D.html('#' + id + ' .J_end','结束时间');
           // console.log('结束时间');
            var date = new Date();
            date.setTime(el);
            var time = date.toLocaleTimeString();
            D.html('#' + id + ' .J_limitTime',time);
        }

        var state = 0; //拍卖状态 0：结束  1：即将竞拍 2：正在竞拍
        /**
         *
         *  @param st   state 拍卖状态 0：结束  1：即将竞拍 2：正在竞拍
         *  @param id   商品ID
         *  @param el   结束时间 即将竞拍
         *  @param ed   结束时间 即将结束，正在竞拍的商品为 0
         */

        function timeShow(st, id, el, ed, fd){
            new cnd({
                element: '#' + id + ' .J_limitTime',
                format: 'h,i,s',
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
                            hasFinish(id,fd);
                        }
                    }
                }
            });
            //添加毫秒倒计时图片
            var ms_img = '<img src="http://img03.taobaocdn.com/tps/i3/T1MEKYXg4gXXXXXXXX-8-9.gif">';
            D.html('#' + id + ' .ms',ms_img);
        }



        IO({
            dataType : 'jsonp',
            url : url,
            data : {
                itemIds:item_id
            },
            jsonpCallback : 'limitback',
            success : function(data){
                /** 返回的参数
                 *  currentPrice : 当前价格
                 *  leftTime : 剩余时间(距离结束)
                 *  itemId
                 *  timeToStart ： 剩余时间(距离开拍)
                 *  totalCnt ： 出价次数
                 */
                S.each(data,function(item){

                    //开拍状态判断
                    var start_time = item.timeToStart; //剩余时间(距离开拍)
                    var end_time = item.leftTime; //剩余时间(距离结束)
                    var finish_time = item.end; //具体结束时间
                    var ID = item.itemId;

                    //修改当前价格和出价次数
                    D.html('#' + ID + ' .limit_price',item.currentPrice);
                    D.html('#' + ID + ' .limit_num',item.totalCnt);

                    //开拍状态判断
                    if(start_time >= 0){    //即将开始
                        //console.log('即将开始');
                        state = 1;
                        show_time = start_time;
                        timeShow(state, ID, show_time, end_time,finish_time);
                    }else if(end_time <= 0){ //已经结束
                        //console.log('已经结束');
                        D.addClass('#' + item.itemId + ' a.wil','fih');
                        D.removeClass('#' + item.itemId + ' a.fih','wil');
                        hasFinish(item.itemId,item.end);
                    }else if(start_time < 0 && end_time > 0){
                        //console.log('正在拍');
                        btnType(ID, 1);    //修改按钮状态
                        state = 2;
                        show_time = end_time;
                        timeShow(state, ID, show_time, 0,finish_time);
                    }

                });
            }
        });



        var time_line = S.query('#J_limit li');
        var limit_content = S.query('#J_limcon .ks-switchable-content');
        var now_time = 0; //当前正在拍卖的li

        /** 根据服务器时间返回值 now_time
         *  10:00~13:00 返回 0
         *  13:00~16:00 返回 1
         *  16:00~19:00 返回 2
         *  默认为-1
         */
        function time_back(el){
            el = (el = new Date()) && el.getHours();
            now_time = el < 19 ? (el < 16 ? (el < 13 ? 0 : 1): 2) : 3;
            /*if(el >= 13 && el < 16){
                now_time = 1
            }else if(el >= 16 && el < 19){
                now_time = 2
            };*/

            return now_time;
        }


        /**
         *   时间线上的样式说明：
         *   nw:当前正在拍卖状态
         *   nv:即将开拍的hover状态
         *   na:选中未开拍状态
         *   ns:选中未开拍状态的当前正在拍卖状态
         *   np:未开拍或已结束下的鼠标hover状态
         */

        //清除时间线上的开拍状态 隐藏所有内容区
        function clearTime(){
            S.each(time_line,function(item){
                D.removeClass(item,'nv');
                D.removeClass(item,'na');
            });

        }
        function clearCont(){
            S.each(limit_content,function(item){
                D.hide(item);
            });
        }

        //取得时间线序号
        function timeNum(ev){
            var num = D.text(ev.target);
            return num;
        }

        //鼠标hover效果
        E.on(time_line,'mouseenter mouseleave',function(ev){
            if(ev.type == 'mouseenter'){
                if(D.hasClass(ev.target,'ns')){ //如果当前时间是未选中
                    D.removeClass(ev.target,'nw');
                    D.removeClass(ev.target,'ns');
                    D.addClass(ev.target,'np');
                }else{
                    D.addClass(ev.target,'nv');
                    D.removeClass(ev.target,'ns');
                }

            };
            if(ev.type == 'mouseleave'){
                if(D.hasClass(ev.target,'np')){
                    D.removeClass(ev.target,'np');
                    D.addClass(ev.target,'ns');
                }else{
                    D.removeClass(ev.target,'nv');
                }
            }
        });

        //点击效果
        E.on(time_line,'click',function(ev){
            clearTime();
            clearCont();
            if(D.hasClass(ev.target,'np')){
                D.addClass(ev.target,'nw');
            }
            if(D.hasClass(ev.target,'nw')){
                D.removeClass(ev.target,'ns');
                D.addClass(ev.target,'nw');
            }else{
                D.addClass(ev.target,'na');
                D.addClass(time_line[line_show],'ns');
            };
            E.on(time_line,'mouseleave',function(ev){
                if(D.hasClass(ev.target,'nw')){
                    D.removeClass(ev.target,'ns');
                }
            });
            var num = timeNum(ev) - 0;  //ie6 不能把string字符串变成number
            clearCont();    //隐藏所有容器
            D.show(limit_content[num]); //显示相应容器
        })

        //获取服务器当前时间 这里用本机时间测试
        //var now_date = new Date();
        //var now_hours = now_date.getHours();
        var now_hours = D.val('#J_NowTime');

        //var now_hours = D.val('#date_time');
        //console.log(now_hours);
        var line_show = time_back(now_hours);
        D.addClass(time_line[line_show],'nw');
        clearCont();
        D.show(limit_content[line_show]);

        //如果拍卖没有开始或已经结束，则显示第一个tab
    };
},{requires:['dom','event','ajax','Countdown']});
