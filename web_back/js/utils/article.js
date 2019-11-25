const ARTICLE = {
    art_search: (obj, fn) => { $.get(PORTCONFIG.article_search, { page: obj.page, key: obj.key, type: obj.type, state: obj.state, id: obj.id }, (res) => { fn(res); }) },
    art_delete: (id, fn) => { $.get(PORTCONFIG.article_delete, { id: id }, (res) => { fn(res) }) },
    art_publish: (fd, fn) => { $.ajax({ url: PORTCONFIG.article_publish, type: "post", contentType: false, processData: false, data: fd, success: (res) => { fn(res); } }) },
    art_edit: (fd, fn) => { $.ajax({ type: "post", url: PORTCONFIG.article_edit, contentType: false, processData: false, data: fd, success: (res) => { fn(res) } }) }
}

let {art_search,art_delete,art_publish,art_edit} = ARTICLE;