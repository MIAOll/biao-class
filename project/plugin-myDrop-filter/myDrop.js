;
(function() {
    'user strict';

    window.myDrop = {
        boot,
    };

    let defaultConfig = {
        display: 'name',
    };
    /**
     * 
     * @param {*} selector 
     * @param {*} list 
     */
    function boot(selector, list, config) {
        let container = document.querySelector(selector);

        config = Object.assign({}, defaultConfig, config);

        // console.log(container);

        prepare(container);
        render(container, list, config);
        bindFocus(container);
        bindClick(container);
        bindSelect(container, config);
        bindSearch(container, config);

    }

    function prepare(container) {
        container.innerHTML = `  
        <div class="dropdown">
                 <div class="filter">
                     <input type="search">
                 </div>
                 <div class="list">
                     
                 </div>
      </div>`;

        container._list = container.querySelector(".list");
        container._input = container.querySelector("[type=search]");

        setListVisible(container, false);
    }

    function render(container, list, config) {
        container.$list = list;
        let el = container._list;
        el.innerHTML = " ";
        list.forEach(it => {
            let item = document.createElement('div');
            item.classList.add('item');
            item.$data = it;
            item.innerText = it[config.display];
            el.appendChild(item);
        })
    }

    function bindSelect(container, config) {

        let onSelect = config.onSelect;
        let input = container._input;

        container._list.addEventListener('click', e => {
            let item = e.target;
            let data = item.$data;
            // console.log(e.target.$data);
            setListVisible(container, false);
            input.value = data.name;
            if (onSelect) {
                onSelect(data);
            }
        })
    }

    function bindSearch(container, config) {
        let input = container._input;
        let list = container.$list;
        // console.log(list);
        input.addEventListener('keyup', e => {
            setListVisible(container, true);
            let keyword = input.value;
            // console.log(keyword);
            let filtered = list.filter(it => {
                return it[config.display].includes(keyword);
            });
            console.log(filtered);
            render(container, filtered, config)
        });
    }

    function bindFocus(container) {
        container._input.addEventListener('focus', e => {
            setListVisible(container, true)
        });
    }

    function bindClick(container) {
        container.addEventListener('click', e => {
            // 如果点的是插件内部就算了
            if (e.target.closest('.dropdown'))
                return;

            // 否则隐藏选项列表
            setListVisible(container, false);
        });
    }



    function setListVisible(container, visible = true) {
        container._list.hidden = !visible;

    }

})();