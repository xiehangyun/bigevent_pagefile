var article = {
    article_search: function (obj, fn) {
        $.get(PORTCONFIG.article_search, { page: obj.page, key: obj.key, type: obj.type, state: obj.state }, function (res) {
            fn(res);
        })
    },
    article_delete: function(id, fn) {
        $.get(PORTCONFIG.article_delete, { id:id },function (res) {
            fn(res)
        })  
    }

}