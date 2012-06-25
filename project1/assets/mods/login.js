/**
 * 登录，daily环境判断以及弹出登录小窗口
 * @Author: wb-jiangfeng
 * @Time: 12-6-15 11:14
 */

KISSY.add(function(S, D, E, UA, O, IO){
    var Login = {};
    /**
     * 登录判断
     * 如果登录返回 nickname
     * 否则返回false
     */
    Login.check = function(){
        if(S.Cookie.get('_nk_') == undefined){
            return false
        }else{
            return S.Cookie.get('_nk_');
        }
    };

    /**
     * daily开发环境判断
     * 返回 true or false
     */
    Login._daily = function(){
        var url = document.location.href;   //获取页面URL地址
        var reg = /(.daily.taobao.net)/i;
        return reg.test(url);
    };

    /* 弹出登录框 */
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

    /* 获取头像 */
    if(Login.check()){
        D.html('#J_userhead','<img src="http://wwc.taobaocdn.com/avatar/getAvatar.do?userNick='+ Login.check() +'&width=30&height=30&type=sns" />');
    }
    //http://wwc.taobaocdn.com/avatar/getAvatar.do?userNick=jfeng173&width=30&height=30&type=sns

    //点击我的有求必应弹出登录框
    E.on('#J_mying','click',Login.cover);

    return Login;
},{requires:['dom','event','ua','overlay','ajax']});
