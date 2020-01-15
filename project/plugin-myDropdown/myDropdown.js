//  myDropdown是我自己封装的一个下拉菜单插件，
// 使用案例可以查看test.html
;
(function() {
    'use strict';

    window.myDropdown = {
        boot,
    };

    function boot(dropdownSelector = '.dropdown', triggerSelector = '.trigger') {
        let dropdown = document.querySelector(dropdownSelector);
        let trigger = document.querySelector(triggerSelector);
        // let links = dropdown.querySelector("a");

        dropdown.classList.add('my-dropdown');
        trigger.classList.add('my-dropdown-trigger');

        // 在body上绑定事件
        document.body.addEventListener('click', (e) => {
            // 缓存事件源，方便后面使用
            let target = e.target;
            // console.log(target);
            // console.log(target.parentNode);
            // 如果事件源是按钮，就直接打开或关闭dropdown
            if (target === trigger) {
                dropdown.hidden = !dropdown.hidden;
                // 此时已经没有必要做其他的事情，直接返回
                return;
            }
            // 如果事件源在dropdown内部（点在dropdown内部）就啥也不干
            // 否则（点在dropdown外部）就隐藏dropdown
            else if (target === dropdown || target.parentNode == dropdown) {
                return;
            } else {
                dropdown.hidden = true;
            }

        });
    }
})();