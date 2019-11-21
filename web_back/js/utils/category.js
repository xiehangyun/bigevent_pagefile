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
    }
} 