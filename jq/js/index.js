;
! function() {
    class LunBo {
        constructor() {
            this.banner = $('.banner');
            this.list = $('.banner>ul>li', true);
            this.btnOl = $('.banner>ol>li', true);
            this.rightArrow = $('.right');
            this.leftArrow = $('.left');
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
                bufferMove(this.list[i], {
                    opacity: 0
                })
            }
            this.btnOl[this.index].className = 'active';
            bufferMove(this.list[this.index], {
                opacity: 100
            })
        }

    }

    new LunBo().init();
}();


// 鼠标划入按钮给相应的圆圈加上样式