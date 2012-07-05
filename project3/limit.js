/**
 *
 * ��ʱ��
 *
 */



KISSY.add('PaiLimit',function(S, D, E, IO, cnd){
    return function(){
        var url = 'http://paimai.taobao.com/json/get_sau.htm';

        //��ȡ��ƷID
        var ids = S.query('#J_limcon .pai-limit-item');
        //var now_price = S.query('#J_limcon .limit_price');  //��ǰ�۸�
        var now_num = S.query('#J_limcon .limit_num');  //���۴���

        var item_id = '';
        S.each(ids,function(item, num){
            var temp_id = D.attr(ids[num],'id');
            item_id = item_id + ',' + temp_id;
        });
        item_id = item_id.substring(1,item_id.length);
        //��������

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

        //�����Ѿ����� �޸����ֺ�ʱ��
        function hasFinish(id,el){
            //�޸� ��ʣ��ʱ�䡱 Ϊ ������ʱ�䡱
            D.html('#' + id + ' .J_end','����ʱ��');
           // console.log('����ʱ��');
            var date = new Date();
            date.setTime(el);
            var time = date.toLocaleTimeString();
            D.html('#' + id + ' .J_limitTime',time);
        }

        var state = 0; //����״̬ 0������  1���������� 2�����ھ���
        /**
         *
         *  @param st   state ����״̬ 0������  1���������� 2�����ھ���
         *  @param id   ��ƷID
         *  @param el   ����ʱ�� ��������
         *  @param ed   ����ʱ�� �������������ھ��ĵ���ƷΪ 0
         */

        function timeShow(st, id, el, ed, fd){
            new cnd({
                element: '#' + id + ' .J_limitTime',
                format: 'h,i,s',
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
                            hasFinish(id,fd);
                        }
                    }
                }
            });
            //��Ӻ��뵹��ʱͼƬ
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
                /** ���صĲ���
                 *  currentPrice : ��ǰ�۸�
                 *  leftTime : ʣ��ʱ��(�������)
                 *  itemId
                 *  timeToStart �� ʣ��ʱ��(���뿪��)
                 *  totalCnt �� ���۴���
                 */
                S.each(data,function(item){

                    //����״̬�ж�
                    var start_time = item.timeToStart; //ʣ��ʱ��(���뿪��)
                    var end_time = item.leftTime; //ʣ��ʱ��(�������)
                    var finish_time = item.end; //�������ʱ��
                    var ID = item.itemId;

                    //�޸ĵ�ǰ�۸�ͳ��۴���
                    D.html('#' + ID + ' .limit_price',item.currentPrice);
                    D.html('#' + ID + ' .limit_num',item.totalCnt);

                    //����״̬�ж�
                    if(start_time >= 0){    //������ʼ
                        //console.log('������ʼ');
                        state = 1;
                        show_time = start_time;
                        timeShow(state, ID, show_time, end_time,finish_time);
                    }else if(end_time <= 0){ //�Ѿ�����
                        //console.log('�Ѿ�����');
                        D.addClass('#' + item.itemId + ' a.wil','fih');
                        D.removeClass('#' + item.itemId + ' a.fih','wil');
                        hasFinish(item.itemId,item.end);
                    }else if(start_time < 0 && end_time > 0){
                        //console.log('������');
                        btnType(ID, 1);    //�޸İ�ť״̬
                        state = 2;
                        show_time = end_time;
                        timeShow(state, ID, show_time, 0,finish_time);
                    }

                });
            }
        });



        var time_line = S.query('#J_limit li');
        var limit_content = S.query('#J_limcon .ks-switchable-content');
        var now_time = 0; //��ǰ����������li

        /** ���ݷ�����ʱ�䷵��ֵ now_time
         *  10:00~13:00 ���� 0
         *  13:00~16:00 ���� 1
         *  16:00~19:00 ���� 2
         *  Ĭ��Ϊ-1
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
         *   ʱ�����ϵ���ʽ˵����
         *   nw:��ǰ��������״̬
         *   nv:�������ĵ�hover״̬
         *   na:ѡ��δ����״̬
         *   ns:ѡ��δ����״̬�ĵ�ǰ��������״̬
         *   np:δ���Ļ��ѽ����µ����hover״̬
         */

        //���ʱ�����ϵĿ���״̬ ��������������
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

        //ȡ��ʱ�������
        function timeNum(ev){
            var num = D.text(ev.target);
            return num;
        }

        //���hoverЧ��
        E.on(time_line,'mouseenter mouseleave',function(ev){
            if(ev.type == 'mouseenter'){
                if(D.hasClass(ev.target,'ns')){ //�����ǰʱ����δѡ��
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

        //���Ч��
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
            var num = timeNum(ev) - 0;  //ie6 ���ܰ�string�ַ������number
            clearCont();    //������������
            D.show(limit_content[num]); //��ʾ��Ӧ����
        })

        //��ȡ��������ǰʱ�� �����ñ���ʱ�����
        //var now_date = new Date();
        //var now_hours = now_date.getHours();
        var now_hours = D.val('#J_NowTime');

        //var now_hours = D.val('#date_time');
        //console.log(now_hours);
        var line_show = time_back(now_hours);
        D.addClass(time_line[line_show],'nw');
        clearCont();
        D.show(limit_content[line_show]);

        //�������û�п�ʼ���Ѿ�����������ʾ��һ��tab
    };
},{requires:['dom','event','ajax','Countdown']});
