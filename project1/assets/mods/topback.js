/**
 * 右侧在线咨询 意见反馈 回到顶部按钮
 * @Author: wb-jiangfeng
 * @Time: 12-6-18 下午5:36
 */
KISSY.add(function(S, D, E, UA){
    var sidetop = {
        _init: function(){
            if(D.docWidth() <= 1220 || window.innerHeight < 440){
                D.hide('#J_sidetop');
            }else{
                D.show('#J_sidetop');
            }
            sidetop._scroll();
        },
        _scroll: function(){
            if(D.scrollTop() < 200){
                D.hide('#J_totop');
            }else{
                D.show('#J_totop');
            }
        },
        _click:function(){
            var t = 0;
            var d = 400;
            var b = 0;
            var c = document.documentElement.scrollTop + document.body.scrollTop;
            var anim = setInterval(function(){
                t = t + 25;
                if(document.documentElement.scrollTop){
                    document.documentElement.scrollTop = c - sidetop._queeaseOut(t,b,c,d);
                }else{
                    document.body.scrollTop = c - sidetop._queeaseOut(t,b,c,d);
                }
                if( t > d ){
                    clearInterval(anim);
                    return false;
                }
            },25);
        },
        _queeaseOut:function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        }
    };
    sidetop._init();
    window.onresize = function(){
        sidetop._init();
    };
    window.onscroll = function(){
        sidetop._scroll();
    };
    /* ie6 fixed hack */
    if(UA.ie == 6){
        D.css('#J_sidetop',{position:'absolute'});
        D.css('#J_sidetop',{top:document.documentElement.scrollTop + 10});
    }
    E.on('#J_totop','click',sidetop._click);
},{requires:['dom','event','ua']});
