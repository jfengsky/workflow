/**
 * Created by IntelliJ IDEA.
 * User: wb-jiangfeng
 * Date: 12-3-1
 * Time: ÉÏÎç10:31
 * ÂÖ²¥½¹µãÍ¼
 */

KISSY.add('PaiFocus',function(S, Switchable){
    return function(){
        var s = new Switchable.Slide('#J_Slide', {
            effect : 'scrollx',
            easing : 'easeOutStrong'
        });
    }
},{requires:['switchable']});