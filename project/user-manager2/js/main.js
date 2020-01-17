;
(function() {
    'user strict';

    let sub = document.querySelector("#submit");
    let form = document.querySelector("#user-form");
    let inputs = {
        id: form.querySelector('[name=id]'),
        username: form.querySelector('[name=username]'),
        email: form.querySelector('[name=email]'),
        balance: form.querySelector('[name=balance]'),
    };

    let index = 0;


    let users = [];

    let userStruct = {
        id: '编号',
        username: '用户名',
        email: '邮箱',
        balance: '余额',
    };

    let ops = [
        /**
         * 删除数据和行
         * @param {HTMLTableRowElement} tr 按钮所在行
         * @param {number} 索引
         */
        {
            class: "delete",
            name: "删除",
            func: function(tr, i) {
                // console.log(this.name);
                tr.remove();
                users[i] = " ";
                // console.log(users);
            }
        }, {
            class: "highlight",
            name: "高光",
            func: function(tr) {
                let classes = tr.classList;
                if (classes.contains('active')) {
                    classes.remove('active');
                } else {
                    tr.classList.add('active');
                }

            }
        }, {
            class: "modify",
            name: "更新",
            func: function(tr, i) {
                console.log(i);
                let change = document.querySelector('#change');
                sub.hidden = true;
                change.hidden = false;
                let children = tr.children;
                // console.log(children);
                //num==本行的序号

                inputs.id.value = i;
                inputs.username.value = children[1].innerText;
                inputs.email.value = children[2].innerText;
                inputs.balance.value = parseInt(children[3].innerText);

                change.value = i;
                change.addEventListener('click', e => {
                    // console.log(change.value);
                    i = change.value;
                    if (sub.hidden && !(change.hidden)) {
                        e.preventDefault();

                        let newData = {}
                        newData.id = i,
                            // console.log(i);
                            newData.username = inputs.username.value,
                            newData.email = inputs.email.value,
                            newData.balance = inputs.balance.value,

                            // console.log(newData);
                            users[i] = newData;

                        myTable.boot("#user-table", userStruct, users, ops);
                        // console.log(users);
                        sub.hidden = false;
                        change.hidden = true;
                    }

                })





            }
        },



    ]


    form.addEventListener('submit', e => {
            e.preventDefault();
            let data = {};
            // console.log(users.length);

            data = myForm.getData(form);
            data.id = index;
            users.push(data);
            myTable.boot("#user-table", userStruct, users, ops);
            form.reset();
            index++;
            // console.log(users);
        })
        // myForm.setData(a, form);
        // myForm.getData(form);
        // myTable.boot("#user-table", userStruct, users, ops);
    myTable.boot("#user-table", userStruct, users, ops);




})();