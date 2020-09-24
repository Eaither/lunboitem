// 每个js文件就是一个独立的模块
// define定义模块，接收两个参数。
// 第一个参数,必须是一个数组,指明该模块的依赖性(完成这个模块我依赖了哪些模块);
// 第2个参数是一个回调函数

define(['pus'], function(t) { //t表示模块返回的对象
    // console.log(getElement);
    class LunBo {
        constructor() {
            this.banner = t.getElement('.banner');
            this.list = t.getElement('.banner>ul>li', true);
            this.btnOl = t.getElement('.banner>ol>li', true);
            this.rightArrow = t.getElement('.right');
            this.leftArrow = t.getElement('.left');
            this.timer = null;
            this.index = 0;
        }

        init() {
            for (let i = 0; i < this.btnOl.length; i++) {
                this.btnOl[i].onmouseover = () => {
                    this.index = i;
                    this.tabChange();
                }
            }

            this.banner.onmouseover = () => {
                this.rightArrow.style.display = 'block';
                this.leftArrow.style.display = 'block';
                clearInterval(this.timer);
            }
            this.banner.onmouseout = () => {
                this.rightArrow.style.display = 'none';
                this.leftArrow.style.display = 'none';
                this.timer = setInterval(() => {
                    this.rightArrow.onclick();
                }, 3000);
            }

            this.rightArrow.onclick = () => {
                this.index++;
                if (this.index > 4) {
                    this.index = 0;
                }
                this.tabChange();

            }
            this.leftArrow.onclick = () => {
                this.index--;
                if (this.index < 0) {
                    this.index = 4;
                }
                this.tabChange();
            }


            this.timer = setInterval(() => {
                this.rightArrow.onclick();
            }, 3000);

        }

        tabChange() {
            for (let i = 0; i < this.btnOl.length; i++) {
                this.btnOl[i].className = ''; //清空类名
                t.bufferMove(this.list[i], {
                    opacity: 0
                })
            }
            this.btnOl[this.index].className = 'active';
            t.bufferMove(this.list[this.index], {
                opacity: 100
            })
        }

    }
    return new LunBo().init();
})