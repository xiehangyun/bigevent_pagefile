var url = "http://192.168.43.33:8000/";

var PORTCONFIG = {
    logIn: url + "admin/login",
    getUser: url + 'admin/getuser',
    logOut: url + "admin/logout",


    search: url + "admin/category_search",
    delete: url + "admin/category_delete",
    edit: url + "admin/category_edit",
    add: url + "admin/category_add",

    article_search: url + "admin/search",
    article_delete: url + "admin/article_delete",
    article_publish: url + "admin/article_publish",
    article_edit: url + "admin/article_edit",


    get_comments: url + "get_comments",
    post_comment: url + "post_comment"
}