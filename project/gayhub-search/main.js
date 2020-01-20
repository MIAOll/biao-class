;
(function() {
    'use strict';

    let form = document.getElementById('search-form');
    let input = form.querySelector('[name=keyword]');
    let userList = document.getElementById('user-list');
    // 每页显示多少用户（每页取多少数据）
    let limit = 10;
    // 当前页，默认为第一页
    let currentPage = 1;

    boot();

    /**
     * 启动
     */
    function boot() {
        bindEvents();
    }

    /**
     * 绑定必要初始事件
     */
    function bindEvents() {
        // 当用户回车搜索时
        form.addEventListener('submit', e => {
            e.preventDefault();
            // 取到搜索关键词
            let keyword = input.value;
            // 搜索用户
            search(keyword);
        });
    }

    /**
     * 通过关键词搜索用户
     * @param {string} keyword
     */
    function search(keyword) {
        // 实例请求对象
        let http = new XMLHttpRequest();
        // 准备地址
        http.open('get', `https://api.github.com/search/users?q=${keyword}&page=${currentPage}&per_page=${limit}`);
        // 发射
        http.send();

        // 当搜索结构返回
        http.addEventListener('load', $ => {
            // 取到json结果
            let json = http.responseText;
            // 解析json字符串
            let data = JSON.parse(json);
            // 渲染数据至页面
            render(data.items);
        });
    }

    /**
     * 渲染用户列表
     * @param {Array} users
     */
    function render(users) {
        // 清空前一次渲染
        userList.innerHTML = '';
        // 循环所有用户
        users.forEach(it => {
            // 每个用户都是个<div>
            let item = document.createElement('div');
            // 加类：<div class=item>
            item.classList.add('item');
            // 填充用户信息
            item.innerHTML = `
        <div class="avatar">
          <img src="${it.avatar_url}">
        </div>
        <div class="detail">
          <strong>${it.login}</strong>
          <div><a target="_blank" href="${it.html_url}">${it.html_url}</a></div>
        </div>
        `;

            // 追加至用户列表
            userList.appendChild(item);
        });
    }
})();