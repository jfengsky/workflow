/**
 * ��ҳ�������ڷ������󶯻�Ч��
 * @Author: wb-jiangfeng
 * @Time: 12-6-20 ����4:34
 * @Param:
 *  -
 *  -
 * @Return:
 *
 */

KISSY.add(function(S, D, Anim, IO){
    //TODO ȥ�ӿ�����ոշ�����������Ϣ
    S.later(function(){
        //������
        var testdata = D.create('<li class="opa">' +
            '<a href="" class="head"><img src="http://img.f2e.taobao.net/img.png?x=50x50" alt="" /></a>' +
            '<div class="pub_info">' +
            '<b><a href="">test</a> �շ����� ����������</b>' +
            '<p><span></span>��һ�ҹ�˾����Ӫ��Χ�����ذ���װ������ӡ��ͼ�Ŀ�ӡ����ơ�</p>' +
            '<span class="time">5��ǰ����</span>' +
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