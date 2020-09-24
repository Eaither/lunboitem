// 主模块触发单个模块
require(['render']);

// require.config({
//     paths: {
//         'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min',
//         'jcookie': 'https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.0/jquery.cookie.min',
//         'jlazyload': 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.8.3/jquery.lazyload.min'
//     },

//     shim: { //让不支持AMD规范的模块支持AMD
//         'jcookie': {
//             deps: ['jquery'], //依赖的模块
//             exports: 'jcookie' //别名
//         },
//         'jlazyload': {
//             deps: ['jquery'], //依赖的模块
//             exports: 'jlazyload' //别名 exports 表示输出的对象名；
//         }
//     }
// });

// require(['jquery'], function() {
//     console.log($)
// })