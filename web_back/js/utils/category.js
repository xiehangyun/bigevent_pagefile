var category = {
    search:function (fn) {
        $.get(PORTCONFIG.search,function (res) {
            fn(res);
        });
    },
    delete:function (delId,fn) {
        $.post(PORTCONFIG.delete,{id:delId},function (res) {
            fn(res);
        })
    },
    edit:function (id,name,slug,fn) {
        $.post(PORTCONFIG.edit,{id:id,name:name,slug:slug},function (res) {
            fn(res)
        })
    },
    add:function (name,slug,fn) {
        $.post(PORTCONFIG.add,{name:name,slug:slug},function (res) {
            fn(res)
        })
    }
} 