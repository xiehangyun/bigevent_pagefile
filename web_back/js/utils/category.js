var category = {
    search:function (fn) {
        $.get(portConfig.search,function (res) {
            fn(res);
        });
    },
    delete:function (delId,fn) {
        $.post(portConfig.delete,{id:delId},function (res) {
            fn(res);
        })
    },
    edit:function (id,name,slug,fn) {
        $.post(portConfig.edit,{id:id,name:name,slug:slug},function (res) {
            fn(res)
        })
    },
    add:function (name,slug,fn) {
        $.post(portConfig.add,{name:name,slug:slug},function (res) {
            fn(res)
        })
    }
} 