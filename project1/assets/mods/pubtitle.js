/**
 * 发布需求标题描述
 * @Author: wb-jiangfeng
 * @Time: 12-6-19 下午3:08
 * @Parame:
 *  - {id} 输入框id
 *  - {el} 显示字数容器id
 *  - {num} 字数
 *  - {fn}  文字超过触发函数
 *  @Return: 文本框字数
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
            if(UA.shell == 'ie'){  // 如果ie
                E.on(id,'propertychange',function(){
                    getNum();
                });
            }else{  // 不是ie
                E.on(id,'input',function(){
                    getNum();
                });
            }
        };
    }
    function wordError(){
        D.text('#J_titlerr','标题超过字数');
    }
    var wordnum = new Words('#J_pubtitle','#J_wordnum',30,wordError);
    wordnum.firstGet();
    E.on('#J_pubtitle','focus blur',function(ev){    //
        if( ev.type == 'focus'){
            wordnum.checkNum();
        }
        if( ev.type == 'blur'){
            //TODO 验证特殊字符
        }
    })
},{requires:['dom','event','ua']});