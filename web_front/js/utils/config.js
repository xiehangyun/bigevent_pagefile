const URL = "http://192.168.43.33:8000/";

const PORTCONFIG = {
    logIn: URL + "admin/login",
    getUser: URL + 'admin/getuser',
    logOut: URL + "admin/logout",


    search: URL + "admin/category_search",
    delete: URL + "admin/category_delete",
    edit: URL + "admin/category_edit",
    add: URL + "admin/category_add",

    article_search: URL + "admin/search",
    article_delete: URL + "admin/article_delete",
    article_publish: URL + "admin/article_publish",
    article_edit: URL + "admin/article_edit",


    get_comments: URL + "get_comments",
    post_comment: URL + "post_comment"
}