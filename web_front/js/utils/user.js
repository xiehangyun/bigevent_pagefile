
const USER = {
    login: (userName, passWord, fn) => { $.post(PORTCONFIG.logIn, { user_name: userName, password: passWord }, (res) => { fn(res); }); },
    getUser: (fn) => { $.get(PORTCONFIG.getUser, function (res) { fn(res); }); },
    logOut: (fn) => { $.post(PORTCONFIG.logOut, () => { fn(); }); }
}

let {login,getUser,logOut} = USER;