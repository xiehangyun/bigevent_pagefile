var comment = {
    get_comments:function (id,fn) {
        $.get(PORTCONFIG.get_comments,{article_id:id},function (res) {
            fn(res)
        })
    },
    post_comment: function (name,content,id,fn) {
        $.post(PORTCONFIG.post_comment,{name:name,content:content,article_id:id},function (res) {
            fn(res)
        })
    }
}