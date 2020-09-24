define([], function() {
    return {
        getelement: function(selector, bool) { //获取元素
            if (!bool) {
                return document.querySelector(selector);
            } else {
                return document.querySelectorAll(selector);
            }
        },
        rannum: function(min, max) { //随机数
            return Math.round(Math.random() * (max - min)) + min;
        }
    }
})