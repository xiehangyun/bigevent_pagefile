
var user = {
    login:function (userName,passWord,fn) {
        $.post(portConfig.logIn,{user_name:userName,password:passWord},
        function (res) {
            fn(res);
        });
    },
    getUser:function (fn) {
        $.get(portConfig.getUser,function (res) {
            fn(res);
        });
    },
    logOut:function (fn) {
        $.post(portConfig.logOut,function () {
            fn();
        });
    }
}