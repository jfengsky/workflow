/**
 * listҳ�����js�л�Ч��
 * @Author: wb-jiangfeng
 * @Time: 12-6-18 ����7:45
 */

KISSY.add(function(S, D, E){
    //�������ѡ��Ч��
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