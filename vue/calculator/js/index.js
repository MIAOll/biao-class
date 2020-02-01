var app = new Vue({
    el: "#app",
    data: {
        equation: ' ',
        result: 0,
        opStack: [],
        q: [],
        calStack: [],
        isNum: false,
        opStacks: {
            'x': 2,
            '/': 2,
            '+': 1,
            '-': 1,
            '(': 0,
            ')': 0,
            // 'undefined': -1
        }
    },
    methods: {

        pushMark: function(e) {
            console.log("输入了" + e);
            this.equation += e;
        },

        calculate: function() {
            var me = this;
            var opStack = me.opStack;
            var q = me.q;
            var opStacks = me.opStacks;
            var calStack = me.calStack;

            function change() {
                var num;
                var equation = me.equation;
                console.log("中序表达式的长度" + equation.length + "中序表达式" + equation);

                for (var i = 1; i < me.equation.length;) {

                    console.log("扫描到的字符" + equation[i]);
                    if (equation[i] >= '0' && equation[i] <= '9') {
                        isNum = true;
                        var num = parseFloat(equation[i]);
                        i++;
                        while (equation[i] >= '0' && equation[i] <= '9') {
                            console.log("扫描到的字符" + equation[i]);
                            var newNum = parseFloat(equation[i])
                            console.log("num" + num + "num类型" + typeof num);
                            console.log("new" + newNum);
                            num = num * 10;
                            num += newNum;
                            console.log("num=" + num);
                            i++;
                        }
                        q.push(num);
                    }
                    // else if (equation[i] == '(') {
                    //     opStack.push(equation[i]);

                    // } else if (equation[i] == ')') {
                    //     // while (opStack[opStack.length - 1] != '(') {
                    //     //     var top = opStack[opStack.length - 1];
                    //     //     q.push(top);
                    //     //     opStack.pop();
                    //     // }
                    //     console.log(opStack);
                    //     console.log("***此时应该是'('" + opStack[opStack.length - 1]);
                    //     // opStack.pop();
                    // }
                    else {

                        isNum = false;
                        var now = equation[i];
                        console.log("当前操作符栈" + opStack + "  长度为:" + opStack.length + "当前队列" + q);
                        var topStack = opStack[opStack.length - 1];
                        console.log("当前的操作符" + now + "栈顶的操作符" + topStack);

                        while (opStack.length != 0 && opStacks[now] <= opStacks[topStack]) {
                            console.log("栈顶元素" + topStack + "出栈");
                            console.log("原栈顶元素" + topStack + "入队");
                            q.push(topStack);
                            opStack.pop();
                            console.log("此时栈中情况" + opStack);
                            topStack = opStack[opStack.length - 1];

                        }
                        opStack.push(now);
                        i++;
                    }
                }
                while (opStack.length != 0) {

                    q.push(opStack[opStack.length - 1]);
                    opStack.pop();
                }
            }
            change();

            for (var n = 0; n < q.length; n++) {
                if ((typeof q[n]) == "number") {
                    calStack.push(q[n]);
                } else {
                    var ope = q[n];
                    var num1 = calStack[calStack.length - 1];
                    calStack.pop();
                    var num2 = calStack[calStack.length - 1];
                    calStack.pop();
                    var num3;
                    switch (ope) {
                        case '+':
                            num3 = num2 + num1;
                            break;
                        case '-':
                            num3 = num2 - num1;
                            break;
                        case 'x':
                            num3 = num2 * num1;
                            break;
                        case '/':
                            num3 = num2 / num1;
                            break;
                    }
                    calStack.push(num3);
                }
            }
            var result = calStack[calStack.length - 1]
            this.result = result;
        },
        squareRoot: function() {
            this.result = Math.sqrt(this.equation);
        },
        cubic: function() {
            this.result = Math.pow(this.equation, 3);
        },
        square: function() {
            this.result = Math.pow(this.equation, 2);
        },
        backspace: function() {
            console.log(this.equation.length - 1);
            this.equation = this.equation.slice(0, this.equation.length - 1);

        },
        clear: function() {
            this.equation = " ";
            this.result = 0;
        },
    }
})