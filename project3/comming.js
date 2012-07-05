/**
 * Created by IntelliJ IDEA.
 * User: wb-jiangfeng
 * Date: 12-3-1
 * Time: 下午4:05
 * 明日预告
 */

KISSY.add('PaiComming',function(S, Switchable){
    return function(){
        var s = new Switchable.Slide('#J_comming', {
            effect : 'scrolly',
            easing : 'easeOutStrong'
        });
    }
},{requires:['switchable']});
