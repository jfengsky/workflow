/**
 * ��¼��daily�����ж��Լ�������¼С����
 * @Author: wb-jiangfeng
 * @Time: 12-6-15 11:14
 */

KISSY.add(function(S, D, E, UA, O, IO){
    var Login = {};
    /**
     * ��¼�ж�
     * �����¼���� nickname
     * ���򷵻�false
     */
    Login.check = function(){
        if(S.Cookie.get('_nk_') == undefined){
            return false
        }else{
            return S.Cookie.get('_nk_');
        }
    };

    /**
     * daily���������ж�
     * ���� true or false
     */
    Login._daily = function(){
        var url = document.location.href;   //��ȡҳ��URL��ַ
        var reg = /(.daily.taobao.net)/i;
        return reg.test(url);
    };

    /* ������¼�� */
    Login.cover = function(){
        var page_Url = window.location.href;
        var login_url = 'https://login.taobao.com/member/login.jhtml';
        if(Login._daily()){
            login_url = 'https://login.daily.taobao.net/member/login.jhtml';
        }
        var dialog = new O.Dialog({
            width:340,
            elCls: 'login',
            elStyle:{
                position: UA.ie == 6 ? "absolute" : "fixed"
            },
            bodyContent: '<iframe src="'+ login_url +'?style=mini&redirectURL='+ page_Url +'&full_redirect=true" frameborder="0"></iframe>',
            mask: true,
            zIndex: 10010,
            align: {
                points: ['cc', 'cc']
            },
            closeAction:"destroy"
        });
        dialog.show();
    };

    /* ��ȡͷ�� */
    if(Login.check()){
        D.html('#J_userhead','<img src="http://wwc.taobaocdn.com/avatar/getAvatar.do?userNick='+ Login.check() +'&width=30&height=30&type=sns" />');
    }
    //http://wwc.taobaocdn.com/avatar/getAvatar.do?userNick=jfeng173&width=30&height=30&type=sns

    //����ҵ������Ӧ������¼��
    E.on('#J_mying','click',Login.cover);

    return Login;
},{requires:['dom','event','ua','overlay','ajax']});
