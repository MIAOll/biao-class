// myTable插件开始
;
(function() {
    'use strict';
    // 全文变量备用
    let table, thead, tbody, structure, list, operations;

    // 暴露插件全局变量
    window.myTable = { boot };

    /**
     * 启动
     * @param {string} tableSelector 对应表格的选择器
     * @param {Object} struct 应该显示哪些列
     * @param {Array} list 显示的数据
     * @param {Object} ops 个性按钮及行为
     */
    function boot(tableSelector, struct, arr, ops) {
        // 各种更新全文变量
        table = document.querySelector(tableSelector);
        thead = table.tHead;
        tbody = table.tBodies[0];
        structure = struct;
        list = arr;
        operations = ops;

        // 直接渲染
        render();
    }

    /**
     * 总渲染
     */
    function render() {
        renderHead();
        renderBody();
    }

    /**
     * 渲染thead
     *
     * 根据structure渲染thead
     * {
     *   name: '姓名',   ==>  |姓名|性别|
     *   gender: '性别',      |xxx|xxx|
     * }
     */
    function renderHead() {
        thead.innerHTML = '';

        // 初始化组装字符串
        let html = '';

        // 循环structure中的每一条
        for (let key in structure) {
            html += `<th>${structure[key]}</th>`;
        }

        // 如果传了个性行为就再加一个表头项
        if (operations)
            html += '<th>操作</th>';

        // 在thead内填充组装好的字符串
        thead.innerHTML = html;
    }

    /**
     * 渲染tbody
     *
     * 使用list渲染tbody（通过structure来限制渲染的数量和属性）
     */
    function renderBody() {
        tbody.innerHTML = '';

        // 循环每一条数据
        // 以用户列表为例 [{王花花...}, {李拴蛋...}]
        // 此时循环的就是每一个用户
        list.forEach((it, index) => {
            // 创建表格行
            console.log(it);
            if (it == ' ')
                return;

            let tr = document.createElement('tr');

            // 初始化tr的组装字符串
            let html = '';

            // 循环当前用户的属性
            // 以 {name: '王花花', gender: '女'} 为例
            for (let key in structure) {
                // 以 name: '王花花' 为例
                // 意味着最后生成的字符串为'<td>王花花</td>'
                if (it[key] == 0) {
                    it[key] = '0';
                }
                html += `<td>${it[key] || '-'}</td>`;
            }

            // 如果传了个性行为
            if (operations) {
                // 就依据个性按钮的键生成button的html代码
                // 准备按钮的html代码
                let btnHtml = ' ';
                operations.forEach(e => {
                    // console.log(e.class, e.name);
                    btnHtml += `<button class="${e.class}">${e.name}</button>`;
                    // console.log(btnHtml);

                })
                btnHtml = `<td>` + btnHtml + `</td>`;
                html += btnHtml;
                // console.log(html);
                // 在tr内填充组装好的字符串
                tr.innerHTML = html;

                // 如果传了个性行为
                if (operations) {
                    // 就给每个行为对应的按钮绑事件
                    operations.forEach(e => {
                        tr.querySelector('.' + e.class).addEventListener('click', function() {
                            e.func(tr, index);
                        })
                    });
                }

                // 在tbody最后追加一行
                tbody.appendChild(tr);
            }
        });

    }
})();
// biaoTable插件结束