/**
 * Created by IntelliJ IDEA.
 * User: wb-jiangfeng
 * Date: 12-3-1
 * Time: ����4:05
 * ����Ԥ��
 */

KISSY.add('PaiComming',function(S, Switchable){
    return function(){
        var s = new Switchable.Slide('#J_comming', {
            effect : 'scrolly',
            easing : 'easeOutStrong'
        });
    }
},{requires:['switchable']});
