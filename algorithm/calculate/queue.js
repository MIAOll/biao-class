function Queue() {
    let items = [];

    // 向队列添加元素（一个或多个）
    this.enqueue = function(element) {
        if (element instanceof Array) items = items.concat(element);
        else items.push(element);
    };

    // 从队列移除元素
    this.dequeue = function() {
        return items.shift();
    };

    // 返回队列中的第一个元素
    this.front = function() {
        return items[0];
    };

    // 判断队列是否为空
    this.isEmpty = function() {
        return items.length === 0;
    };

    // 返回队列的长度
    this.size = function() {
        return items.length;
    };

    // 清空队列
    this.clear = function() {
        items = [];
    };

    // 打印队列内的所有元素
    this.print = function() {
        // console.log(items.toString());
        let objString;
        if (items[0].num)
            objString = `${items[0].num}`;
        else {
            objString = `${items[0].op}`;
        }
        // let objString = `${items[0].num}`;
        for (let i = 1; i < items.length; i++) {
            if (items[i].num)
                objString += `,${items[i].num}`;
            else {
                objString += `,${items[i].op}`;
            }
        }
        console.log(objString);
    };

    this.elementOfIndex = function(i) {
        return items[i];
    };
}