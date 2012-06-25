/**
 * ���������������
 * @Author: wb-jiangfeng
 * @Time: 12-6-19 ����3:08
 * @Parame:
 *  - {id} �����id
 *  - {el} ��ʾ��������id
 *  - {num} ����
 *  - {fn}  ���ֳ�����������
 *  @Return: �ı�������
 *
 */
KISSY.add(function(S, D, E, UA){
    function Words(id, el, num, fn){
        function getNum(){
            var now_words = D.val(id);
            var temp_num = now_words.length;
            if( temp_num > num){
                fn();
                var new_words = now_words.substr(0,num);
                D.val(id, new_words)
            }else{
                D.text(el,temp_num);
                D.text('#J_titlerr','');
            }
        }
        this.firstGet = function(){
            getNum();
        };
        this.checkNum = function(){
            if(UA.shell == 'ie'){  // ���ie
                E.on(id,'propertychange',function(){
                    getNum();
                });
            }else{  // ����ie
                E.on(id,'input',function(){
                    getNum();
                });
            }
        };
    }
    function wordError(){
        D.text('#J_titlerr','���ⳬ������');
    }
    var wordnum = new Words('#J_pubtitle','#J_wordnum',30,wordError);
    wordnum.firstGet();
    E.on('#J_pubtitle','focus blur',function(ev){    //
        if( ev.type == 'focus'){
            wordnum.checkNum();
        }
        if( ev.type == 'blur'){
            //TODO ��֤�����ַ�
        }
    })
},{requires:['dom','event','ua']});