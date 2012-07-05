/**
 * Created by IntelliJ IDEA.
 * User: wb-jiangfeng
 * Date: 12-3-5
 * Time: ����2:55
 * ����ͼ�����Ƽ�������Ʒ
 */

KISSY.add('PaiRecommend',function(S, D, IO, cnd){
    return function(){
        //��ȡ��ƷID
        var ids = S.query('#J_recom .pai-recommend-item');
        //var now_price = S.query('#J_recom .recom_price');
        var url = 'http://paimai.taobao.com/json/get_sau.htm';  //ͨ�ýӿ�
        //var url = 'http://paimai.taobao.com/json/get_ending_auction.htm'; //�����Ľӿ�
        var item_id = '';

        S.each(ids,function(item, num){
            var temp_id = D.attr(ids[num],'id');
            item_id = item_id + ',' + temp_id;
        });
        item_id=item_id.substring(1,item_id.length);

        /**
         *  ��ť״̬����
         *  ���а�ťĬ��Ϊ��������
         *  0����������
         *  1����ʼ����
         *  2�����Ľ���
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

        var state = 0; //����״̬ 0������  1���������� 2�����ھ���
        /**
         *
         *  @param st   state ����״̬ 0������  1���������� 2�����ھ���
         *  @param id   ��ƷID
         *  @param el   ����ʱ�� ��������
         *  @param ed   ����ʱ�� �������������ھ��ĵ���ƷΪ 0
         */

        function timeShow(st, id, el, ed){
            new cnd({
                element: '#' + id + ' .J_recomTime',
                format: 'd,h,i,s',
                leftTime: el,
                onProcess: function(n){
                    if(st && n <= 0){
                        if(st == 1){
                            //console.log('�л������ھ��ĵ���ʱ');
                            st = 2;  //�޸�״̬���Ժ�ִ�����if
                            if(ed != 0){    //����о��Ľ���
                                this.setLeftTime(ed);
                            }
                            //�޸İ�ť״̬
                            btnType(id, 1);
                        }else if(st == 2){
                            //console.log('���Ľ�����');
                            st = 0;
                            btnType(id, 2); //�޸İ�ť״̬
                            D.remove('#' + id + ' .ms');    //�Ƴ����뵹��ʱ
                        }
                    }
                }

            });
            //��Ӻ��뵹��ʱͼƬ
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
                /** ���صĲ���
                 *  currentPrice : ��ǰ�۸�
                 *  leftTime : ʣ��ʱ��(�������)
                 *  itemId
                 *  timeToStart �� ʣ��ʱ��(���뿪��)
                 */

                S.each(data,function(item){
                    var start_time = item.timeToStart; //ʣ��ʱ��(���뿪��)
                    var end_time = item.leftTime; //ʣ��ʱ��(�������)
                    var show_time = 0; //��ʱ����ʱ����
                    var ID = item.itemId; //��ƷID

                    //�޸ĵ�ǰ�۸�
                    D.html('#' + ID + ' .recom_price',item.currentPrice);

                    //����״̬�ж�
                    if(start_time >= 0){    //������ʼ
                        //console.log('������ʼ');
                        state = 1;
                        show_time = start_time;
                        timeShow(state, ID, show_time, end_time);
                    }else if(end_time <= 0){ //�Ѿ�����
                        //console.log('�Ѿ�����');
                        D.addClass('#' + item.itemId + ' a.wil','fih');
                        D.removeClass('#' + item.itemId + ' a.fih','wil');
                    }else if(start_time < 0 && end_time > 0){
                        //console.log('������');
                        btnType(ID, 1);    //�޸İ�ť״̬
                        state = 2;
                        show_time = end_time;
                        timeShow(state, ID, show_time, 0);
                        //�����������ʱ
                    }
                });
            }
        });
    };
},{requires:['dom','ajax','Countdown']});