var Login = {
    setLogin: function(id, wrapper, button) {
        /*参数说明
        1.id表示游戏,sc2 | d3 | hs | wow | heroes | gsports | ow
        2.wrapper存放登录、注销以及显示战网昵称，比如以前的$(".welcome");
        3.button表示点击登录的按钮,这个参数可以传入字符串，比如"#a_login";也可以传入数组，因为有些情况是在一个页面上会有多个登录按钮，比如["#a_login",".a_login"];
        */
        var domain = location.protocol + "//" + location.host,
            login_url = domain + "/battlenet/login",
            logout_url = domain + "/battlenet/logout",
            bnetLogoutUrl = "http://account.bnet.163.com/battlenet/logout?inner_ref=";
            current_url = location.href,
            bnetOauthPrefix = "http://account.bnet.163.com/battlenet/login?inner_client_id=" + id + "&inner_redirect_uri=",
            bnetLogoutPrefix = "https://www.battlenet.com.cn/login/zh/logout?fast&ref=";

        var loginWrap = $(wrapper);

        var battletag = $.cookie("battletag");
        var isLogin = false;
        if (battletag != null) {
            isLogin = true;
            if (battletag != "character+not+found") {
                var login_name = decodeURIComponent(battletag).replace(/\"/g, "");
                var battle_code=login_name.substring(login_name.indexOf("#"));
                var tag_name = login_name.replace(/[#]\d+/gi, "");
                var logout_url_href = bnetLogoutPrefix + encodeURIComponent(bnetLogoutUrl + encodeURIComponent(logout_url + "?redirect_url=" + encodeURIComponent(current_url)));
                if (loginWrap) {
                    loginWrap.html(login_name + '&nbsp; | &nbsp;<a href="' + logout_url_href + '" tabindex="50" accesskey="2">注销</a>');
                }

            } else {
                var logout_url_href = bnetLogoutPrefix + encodeURIComponent(bnetLogoutUrl + encodeURIComponent(logout_url + "?redirect_url=" + encodeURIComponent(current_url)));
                if (loginWrap) {
                    loginWrap.html('您尚未<a href="https://www.battlenet.com.cn/account/management/battletag-create.html" target="_blank">设置战网昵称</a>&nbsp; | &nbsp;<a href="' + logout_url_href + '" tabindex="50" accesskey="2">注销</a>');
                }
            }
        } else {
            isLogin = false;
        }
        var login_url_href = bnetOauthPrefix + encodeURIComponent(login_url + "?redirect_url=" + encodeURIComponent(current_url));
        if (typeof button == "string") {
            $(button).attr("href", login_url_href);
        } else {
            for (var i in button) {
                $(button[i]).attr("href", login_url_href);
            }
        }

        Login.params = {
            isLogin: isLogin, //是否登录,调用方法Login.params.isLogin
            battle_code:battle_code,//战网昵称,带#以及后面的数字
            tag_name: tag_name, //战网昵称,不带#以及后面的数字
            login_url: login_url_href, //登录地址
            logout_url: logout_url_href //退出地址            
        }
    }
};