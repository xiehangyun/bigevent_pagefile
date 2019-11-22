
var user = {
    login:function (userName,passWord,fn) {
        $.post(PORTCONFIG.logIn,{user_name:userName,password:passWord},
        function (res) {
            fn(res);
        });
    },
    getUser:function (fn) {
        $.get(PORTCONFIG.getUser,function (res) {
            fn(res);
        });
    },
    logOut:function (fn) {
        $.post(PORTCONFIG.logOut,function () {
            fn();
        });
    }
}