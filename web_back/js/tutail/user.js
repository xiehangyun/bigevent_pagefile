
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
    },




    search:function (fn) {
        $.get(portConfig.search,function (res) {
            fn(res);
        });
    },
    delete:function (delId,fn) {
        $.post(portConfig.delete,{id:delId},function (res) {
            fn(res);
        })
    }
}