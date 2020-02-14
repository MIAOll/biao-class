class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    // getElementAt(position) {} // 返回链表中索引所对应的元素
    getElementAt(position) {
            if (position < 0 || position >= this.length) return null;
            let current = this.head;
            for (let i = 0; i < position; i++) {
                current = current.next;
            }
            return current;
        }
        // append(element) {} 
        // 向链表中添加节点
    append(element) {
            let node = new Node(element);
            if (this.head === null) { this.head = node; } else {
                let current = this.getElementAt(this.length - 1);
                current.next = node;
            }
            this.length++;
        }
        // insert(position, element) {} // 在链表的指定位置插入节点
    insert(position, element) {
            if (position < 0 || position > this.length) return false;
            let node = new Node(element);
            if (position == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                let previous = this.getElementAt(position - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        // removeAt(position) {} // 删除链表中指定位置的元素，并返回这个元素的值
    removeAt(position) {
            if (position < 0 || position >= this.length) return null;
            let current = this.head;
            if (position === 0) this.head = current.next;
            else {
                let previous = this.getElementAt(position - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }
        // remove(element) {} // 删除链表中对应的元素
    remove(element) {
            if (this.length <= 0) {
                return false;
            } else {
                let current = this.head;
                for (let i = 0; i < this.length; i++) {
                    if (current.element === element) {
                        this.removeAt(i);
                        return true;
                    }
                    current = current.next;
                }
                return false;
            }
        }
        // indexOf(element) {} // 在链表中查找给定元素的索引
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.element === element) return i;
            current = current.next;
        }
        return -1;
    }

    // isEmpty() {} // 判断链表是否为空
    isEmpty() {
            return this.length == 0;
        }
        // size() {} // 返回链表的长度
    size() {
            return this.length;
        }
        // getHead() {} // 返回链表的头元素
    getHead() {
            return this.head;
        }
        // clear() {} // 清空链表
    clear() {
            this.head = null;
            this.length = 0;
        }
        // toString() {} // 辅助方法，按指定格式输出链表中的所有元素，方便测试验证结果
    toString() {
        let current = this.head;
        let str;
        let nextElement;
        nextElement = current.next ? current.next.element : 'null';
        while (current != null) {
            str += `[element:${current.element},next:${nextElement}]`;
            current = current.next;
        }
        return str;
    }
};