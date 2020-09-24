function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr]
    }
}



define([], function() { //'style'
    return {
        getElement: function(selector, bool) { //,bool:
            if (!bool) {
                return document.querySelector(selector);
            } else {
                return document.querySelectorAll(selector);
            }
        },

        bufferMove: function(obj, json, fn) {
            let speed = 0;
            clearInterval(obj.timer);
            obj.timer = setInterval(() => {
                let flag = true;
                for (let attr in json) {
                    var currentValue = null;
                    if (attr === 'opacity') {
                        currentValue = Math.round(getStyle(obj, attr) * 100);
                    } else {
                        currentValue = parseInt(getStyle(obj, attr));
                    }
                    speed = (json[attr] - currentValue) / 10;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if (currentValue !== json[attr]) {
                        if (attr === 'opacity') {
                            obj.style.opacity = (currentValue + speed) / 100;
                        } else {
                            obj.style[attr] = currentValue + speed + 'px';
                        }
                        flag = false;
                    }
                }
                if (flag) {
                    clearInterval(obj.timer);
                    fn && typeof fn === 'function' && fn();
                }
            }, 1000 / 60);
        }

    }
})