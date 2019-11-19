var url = "http://192.168.43.33:8000/";




var user = {
    login:function (userName,passWord,fn) {
        $.post(url+"admin/login",{user_name:userName,password:passWord},
        function (res) {
            fn(res)
        })
    },
    getUser:function (fn) {
        $.get(url+"admin/getuser",function (res) {
            fn(res)
        })
    }
}