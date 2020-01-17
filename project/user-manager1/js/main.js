;
(function() {
    'user strict';
    let users = [{
            username: 'gcy',
            email: '133@qq.com',
            balance: 800,
        },
        {
            username: 'lyt',
            email: '133@qq.com',
            balance: 800,
        }
    ];
    let elForm = document.querySelector("#user-form");
    let elTable = document.querySelector("#user-table");
    let elTbody = elTable.querySelector('tbody');
    let inputs = {
        id: elForm.querySelector('[name=id]'),
        username: elForm.querySelector('[name=username]'),
        email: elForm.querySelector('[name=email]'),
        balance: elForm.querySelector('[name=balance]'),
    };
    // let isUpdate = false;


    boot();

    function boot() {
        bindSubmit();
        renderTable();
    }

    function bindSubmit() {
        elForm.addEventListener('submit', e => {
            e.preventDefault();
            let data = {};

            data.username = inputs.username.value;
            data.email = inputs.email.value;
            data.balance = inputs.balance.value;
            let index = inputs.id.value;

            // console.log(data);

            elForm.reset();
            if (index) {
                console.log("update");
                users[index] = data;
            } else {
                users.push(data);
            }




            console.log(users);
            renderTable();
        })
    }

    function renderTable() {
        elTbody.innerHTML = ' ';
        users.forEach((user, index) => {

            if (!user)
                return;
            let tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.balance}</td>
                <td class="text-right"><button class="fill">更新</button><button class="delete">删除</button></td>`;
            // console.log(user);
            let del = tr.querySelector('.delete');

            del.addEventListener('click', e => {
                tr.remove();
                users[index] = " ";
                console.log(users);
            })

            let fill = tr.querySelector(".fill");
            fill.addEventListener('click', e => {

                inputs.id.value = index;
                inputs.username.value = user.username;
                inputs.email.value = user.email;
                inputs.balance.value = user.balance;

            })
            elTbody.appendChild(tr);
        })

    }


})();