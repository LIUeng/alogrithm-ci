/**
 * 代码实现中...持续关注这里
 *
 * 1. 单链表反转
 * 2. 链表中环的检测
 * 3. 两个有序的链表合并
 * 4. 删除链表倒数第 n 个结点
 * 5. 求链表的中间结点
 * 6. 用链表判断字符串为回文字符串
 */

// 单链表
class SNode {
    constructor(snode) {
        this.snode = snode;
        this.next = null;
    }
}

class SLinkList {
    constructor() {
        this.root = null;
    }

    /**
     * 插入结点
     * @param {any} snode
     */
    insert(snode) {
        if (this.root) {
            let node = this.root;
            let newNode = new SNode(snode);
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
        } else {
            this.root = new SNode(snode);
        }
    }

    /**
     * 单链表反转
     * 尾部插法 存在哨兵
     */
    reverse() {
        let node = this.root.next,
            newNode = new SNode("head");
        // node => { snode: 1, next: { snode: 2, next: { 3 - 4 } } }
        while (node) {
            let next = node.next; // { snode: 2, next: { 3 - 4 } } = { snode: 3, next { 4 } }
            node.next = newNode.next; // node.next = { null } node.next = 
            newNode.next = node; // newNode = { snode: head, next: { snode: 1, next: null } } = newNode.next = {}
            node = next;
        }
        // this.root = newNode;
        return newNode;
    }

    /**
     * 无头链表反转
     * 无哨兵
     */
    reverse_head(p) {
        let node = this.root,
            pre = null;
        while (p !== node) {
            let next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
        node.next = pre;
        return node;
    }

    /**
     * 链表中环的检测
     */
    checkCircle() {
        let node = this.root,
            lastNode;
        while (node.next) {
            node = node.next;
        }
        // 最后一个结点是否指向第一个非哨兵结点
        lastNode = node;
        if (lastNode.snode === this.root.next.snode) {
            return true;
        }
        return false;
    }

    /**
     * 删除链表倒数第n个结点
     */
    removeLastN(n) {
        // 检测是否是环
        if (this.checkCircle) return false;
        this.reverse(this.root);
        let count = 1;
        let curNode = this.root;
        while (curNode) {
            if (count === n) {
                let next = curNode.next;
                if (!next) {
                    console.log("无法删除最后一个结点");
                    return false;
                }
                curNode.next = next.next;
                curNode.snode = curNode.snode;
            }
            count++;
            curNode = curNode.next;
        }
        this.reverse(this.root);
    }

    /**
     * 求链表的中间结点
     * 快慢指针
     */
    findMiddleNode() {
        let fast = this.root;
        let slow = this.root;
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }

    /**
     * 找到前结点
     */
    findPrev(snode) {
        let node = this.root;
        while (node.next && node.next.snode !== snode) {
            node = node.next;
        }
        if (!node) {
            return false;
        }
        return node;
    }

    /**
     * 回文字符串
     */
    isPalindromic() {
        // 找到中间结点
        // 判断结点奇偶
        let fast = this.root;
        let slow = this.root;
        let left, right;
        while (fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        if (fast.next == null) {
            console.log("奇数", slow);
            left = this.reverse_head(slow).next;
            right = slow.next;
        } else {
            console.log("偶数", slow);
            left = this.reverse_head(slow);
            right = slow;
        }
        return this.compareResult(left, right);
    }

    /**
     * 比较结果
     */
    compareResult(left, right) {
        let flag = false;
        while (left && right) {
            if (left.snode == right.snode) {
                flag = true;
                left = left.next;
                right = right.next;
                continue;
            } else {
                flag = false;
                break;
            }
        }
        return flag;
    }

    /**
     * 合并两个有序链表
     * 利用哨兵降低实现难度
     */
    mergeSortList(left, right) {
        let head = new SNode("head");
        let p = head;
        while (left && right) {
            debugger;
            if (left.snode < right.snode) {
                p.next = left;
                left = left.next;
            } else {
                p.next = right;
                right = right.next;
            }
            p = p.next;
        }
        if (left) p.next = left;
        if (right) p.next = right;
        return head.next;
    }
}

/**
 * example below
 */
var slinklist = new SLinkList();
var slinklist1 = new SLinkList();

// 队首 跟一个 哨兵
slinklist.insert('head');
slinklist.insert(1);
slinklist.insert(2);
slinklist.insert(3);
slinklist.insert(4);
slinklist.reverse();
// 链表反转
// slinklist.reverse_head();
// slinklist.reverse_head();
// 检测环
// console.log('是否是环：', slinklist.checkCircle());
// 删除链表倒数第n个结点
// slinklist.removeLastN(5);
// 前结点
// console.log('前结点：', slinklist.findPrev(2));
// 链表的中间结点
// console.log('中间结点：', slinklist.findMiddleNode());
// 判断回文字符串
// console.log('是否为回文字符串：', slinklist.isPalindromic());

// slinklist 1
slinklist1.insert(5);
slinklist1.insert(6);
slinklist1.insert(7);
slinklist1.insert(8);

// console.log(
//     "两个有序链表合并之后：",
//     slinklist.mergeSortList(slinklist.root, slinklist1.root)
// );
