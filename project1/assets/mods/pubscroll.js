/**
 * 首页他们正在发布需求动画效果
 * @Author: wb-jiangfeng
 * @Time: 12-6-20 下午4:34
 * @Param:
 *  -
 *  -
 * @Return:
 *
 */

KISSY.add(function(S, D, Anim, IO){
    //TODO 去接口请求刚刚发布的需求信息
    S.later(function(){
        //假数据
        var testdata = D.create('<li class="opa">' +
            '<a href="" class="head"><img src="http://img.f2e.taobao.net/img.png?x=50x50" alt="" /></a>' +
            '<div class="pub_info">' +
            '<b><a href="">test</a> 刚发布了 服务类需求</b>' +
            '<p><span></span>开一家公司，经营范围：因素啊、装订、打印、图文快印、设计。</p>' +
            '<span class="time">5秒前发布</span>' +
            '</div>' +
            '</li>');
        D.prepend(testdata,'#J_publist');
        var anim = new Anim(testdata,{
            'height': '92px',
            'opacity': '1'
        });
        anim.stop();
        anim.run();
    },5000,true);
},{requires:['dom','anim','ajax']});