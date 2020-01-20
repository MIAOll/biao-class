let list = [{
        id: 1,
        name: '王花花',
    },
    {
        id: 2,
        name: '李栓但',
    },
    {
        id: 1,
        name: '赵克爽',
    },
]

myDrop.boot('main', list, {
    display: 'name',
    onSelect(it) {
        console.log(it);
    },
});
// 不传也行
// myDrop.boot('main', list);