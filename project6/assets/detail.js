/**
 * �����detailҳ��js����
 * @Author: wb-jiangfeng
 * @Time: 12-10-25 10:30
 * @Param:
 */

KISSY.add(function(S, Login) {
    // login/login ��¼ daily�ж�
    // detail/mdeal.js ����ѫ��
    // detail/item-pic.js ��Ʒ��ͼ�л�Ч�� ȡ������ ��������
    // groupdown.js ����ʱЧ��
    // ������Ч��
    // ������
    // seller.js ����Ͷ��
    // info.js ��Ʒ����tab��չ������Ч��
    // page.js ��ҳ���
    // comment.js �������
    // leadlist.js �����˺����������� 
    // hotlist.js ���ź�����������
    // detailbid.js ����Ͷ�굯��Ͳ���
    // bidvote.js ��Χ����Ͳ���
    // pay/bag.js ���
}, {
    requires: ['assets/login/login','assets/detail/bidvote','assets/detail/medal','assets/detail/item-pic','assets/detail/groupdown','assets/detail/seller','assets/detail/info','assets/detail/leadlist','assets/detail/page','assets/detail/detailbid','assets/detail/comment','assets/pay/bag']
});

KISSY.use("gallery/countdown/1.2/index",function(S, Countdown){
    S.all('#J_countdown .cd').each(function(node) {
        Countdown(node, {
            effect: 'slide',
            _clock: ['d', 100, 2, 'h', 100, 2, 'm', 60, 2, 's', 60, 2, 'u', 10, 1]
        });
    });
});