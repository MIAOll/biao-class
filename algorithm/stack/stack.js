class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
}

function toBinary(num, base = 10) {
    const stack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // console.log(num);
    // console.log(base);

    let rem;
    let baseString = ' ';

    if (!(base >= 2 && base <= 36)) {
        return '超出范围，无法转换';
    }

    while (num > 0) {
        rem = Math.floor(num % base);
        stack.push(rem);
        num = Math.floor(num / base);
    }
    console.log(stack.items);

    while (!stack.isEmpty()) {

        let index = stack.pop();
        console.log(index);
        baseString += digits[index];
        // baseString = baseString + str;
        console.log('baseString', baseString);
    }
    console.log(baseString);
    return baseString;
}

function isCanPop(num, arr) {
    let cur = 0;
    let stack = new Stack();
    let flag = true;
    for (let i = 1; i <= num; i++) {
        console.log(i);
        stack.push(i);

        if (i == arr[cur]) {
            console.log("此时序列轮到" + arr[cur]);
            console.log("出栈数子" + i);
            stack.pop();
            cur++;
        }
    }
    if (stack.isEmpty()) {
        return flag;
    } else {
        flag = !flag;
        return flag;
    }


}