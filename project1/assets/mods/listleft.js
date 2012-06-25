/**
 * list页面左侧js切换效果
 * @Author: wb-jiangfeng
 * @Time: 12-6-18 下午7:45
 */

KISSY.add(function(S, D, E){
    //清除所有选中效果
    function clear(){
        var lis = S.query('#J_listtype .list-type');
        S.each(lis,function(item){
            D.removeClass(item,'on');
        });
    }
    E.on('#J_listtype h5','click',function(ev){
        clear();
        D.addClass(D.parent(ev.target,'.list-type'),'on');
    })

},{requires:['dom','event']});