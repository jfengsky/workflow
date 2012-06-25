/**
 * 
 * @Author:wb-gaozhan
 * @Time:2012-06-18 18:46
 */

KISSY.add(function(S, D){
    var Text_Scrolling ={};
    Text_Scrolling.scrolling=function(){
        var margin_left=parseInt(D.css('#J_ScrollText', "margin-left"));
        margin_left--;
        D.css('#J_ScrollText', {"margin-left": margin_left+"px"});
        if (margin_left == -(parseInt(D.css('#J_ScrollText', "width"))-130)){
            D.css('#J_ScrollText', {"margin-left": "0px"});
            window.setTimeout(Text_Scrolling.scrolling,100);
        }
        else {
            window.setTimeout(Text_Scrolling.scrolling,100);
        }
    };
    return Text_Scrolling;
},{requires:['dom']});
