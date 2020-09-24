require.config({
    path: {
        'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min',
        'jcookie': 'https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.0/jquery.cookie.min',
        'jlazyload': 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.8.3/jquery.lazyload.min'
    },

    shim: { //让不支持AMD规范的模块支持AMD
        'jcookie': {
            deps: ['jquery'], //依赖的模块
            exports: 'jcookie' //别名
        },
        'jlazyload': {
            deps: ['jquery'], //依赖的模块
            exports: 'jlazyload' //别名 exports 表示输出的对象名；
        }
    }
});
// require调用模块
// 如果直接在render.js用require(['config']),就相当于是直接引入文件没有暴露对象，而没有调用，因此需要再次require(['jquery']，['']，['']，function(){]}),这样没法用define，所以把配置文件放到main文件