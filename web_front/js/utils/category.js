const CATEGORY = {
    cat_search: (fn) => { $.get(PORTCONFIG.search, (res) => { fn(res); }); },
    cat_delete: (delId, fn) => { $.post(PORTCONFIG.delete, { id: delId }, (res) => { fn(res); }) },
    cat_edit: (id, name, slug, fn) => { $.post(PORTCONFIG.edit, { id: id, name: name, slug: slug }, (res) => { fn(res) }) },
    cat_add: (name, slug, fn) => { $.post(PORTCONFIG.add, { name: name, slug: slug }, (res) => { fn(res) }) }
} 

let {cat_search,cat_edit,cat_add,cat_delete} = CATEGORY;