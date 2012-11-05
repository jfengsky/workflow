/**
 * 登录，登录判断，daily环境判断以及弹出登录小窗口
 * @Author: wb-jiangfeng
 * @Time: 12-10-24 15:56
 */

KISSY.add(function(S, D, E, UA, O){
    var Login = {};
    /**
     * 登录判断
     * 如果登录返回 nickname
     * 否则返回false
     */
    Login.check = function(){
        if(S.Cookie.get('_nk_') == undefined){
            return false;
        }else{
			var nick = S.Cookie.get('_nk_');
			nick = nick.replace(/\\/g,"%");
            return unescape(nick);
        }
    };

    /**
     * 获取用户头像
     * 返回头像地址
     * el 头像大小
     */
    Login.header = function(el){
        return Login.check() ? 'http://wwc.taobaocdn.com/avatar/getAvatar.do?userNick='+ Login.check() +'&width=' + el + '&height=' + el + '&type=sns' : false;
    }

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
        var page_Url = escape(window.location.href);
        var login_url = 'https://login.taobao.com/member/login.jhtml';
        if(Login._daily()){
            login_url = 'https://login.daily.taobao.net/member/login.jhtml';
        }
        var dialog = new O.Dialog({
            width:360,
            elCls: 'login',
            elStyle:{
                position: UA.ie == 6 ? "absolute" : "fixed"
            },
            bodyContent: '<iframe src="'+ login_url +'?style=mini&redirectURL='+ page_Url +'&full_redirect=true" frameborder="0" style="height:260px;width:360px"></iframe>',
            mask: true,
            zIndex: 10010,
            align: {
                points: ['cc', 'cc']
            },
            closeAction:"destroy"
        });
        dialog.show();
    };

    return Login;
},{requires:['dom','event','ua','overlay']});