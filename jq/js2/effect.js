define(['tool', 'jquery'], function(t) {
    return {
        tab: (function() { //渲染效果返回自执行函数可以避免调用
            const titles = t.getelement('.tab_title a', true);
            const items = t.getelement('.tab_content .item', true);
            for (let i = 0; i < titles.length; i++) {
                titles[i].onclick = function() {
                    //清除其他的。
                    for (let j = 0; j < titles.length; j++) {
                        titles[j].className = '';
                        items[j].style.display = 'none';
                    }
                    //i:就是当前点击的titles的索引。
                    titles[i].className = 'active'; //当前点击的标题。
                    items[i].style.display = 'block';
                }
            }
        })(),

        allselect: (function() {
            const $allselect = $('.allselect'); //全选按钮
            const $inputs = $('input').not('.allselect'); // 除了全选按钮之外的input
            $allselect.click(function() { //原生js下面的DOM 0级事件
                $inputs.prop('checked', $(this).prop('checked'));
            });
            $inputs.click(function() {
                if ($('input:checked').not('.allselect').size() === $inputs.size()) {
                    $allselect.prop('checked', true);
                } else {
                    $allselect.prop('checked', false);
                }
            });
        })()
    }
})