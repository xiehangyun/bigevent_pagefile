const COMMENT = {
    get_comments: (id, fn) => {
        $.get(PORTCONFIG.get_comments, { article_id: id }, (res) => {
            fn(res)
        })
    },
    post_comment: (name, content, id, fn) => {
        $.post(PORTCONFIG.post_comment, { name: name, content: content, article_id: id }, (res) => {
            fn(res)
        })
    }
}

let {post_comment,get_comments} = COMMENT;
