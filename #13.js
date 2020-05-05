/**
 * 二叉树
 */

// waiting...
// 前序遍历 中序遍历 后序遍历
// 按层遍历
// 二叉查找树

class Node {
    constructor(node) {
        this.node = node;
        this.left = null;
        this.right = null;
    }
}

// binary tree
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // 二叉树插入
    insert(node) {
        if (this.root) {
            let newNode = new Node(node),
                curNode = this.root;
            while (curNode) {
                if (curNode.node > node) {
                    if(curNode.left == null) {
                        curNode.left = newNode;
                        return;
                    }
                    curNode = curNode.left;
                } else {
                    if(curNode.right == null) {
                        curNode.right = newNode;
                        return;
                    }
                    curNode = curNode.right;
                }
            }
        } else {
            this.root = new Node(node);
        }
    }

    // 非递归实现
    findByValueII(value) {
        let curNode = this.root;
        while(curNode) {
            if(curNode && curNode.node === value) return curNode;
            if(curNode && curNode.node > value) {
                curNode = curNode.left;
            } else {
                curNode = curNode.right;
            }
        }
        return -1;
    }

    // 查询
    findByValue(node) {
        let curNode = this.root;
        return this.find(curNode, node);
    }

    // find utils
    find(cnode, onode) {
        // console.log('hello node: ', cnode, onode);
        if (cnode && cnode.node === onode) return cnode;
        if (cnode && cnode.node > onode) {
            cnode = cnode.left;
            return this.find(cnode, onode);
        }
        if (cnode && cnode.node < onode) {
            cnode = cnode.right;
            return this.find(cnode, onode);
        }
        return -1;
    }

    // 删除 三种情况
    // 1. 没有子节点
    // 2. 一个子节点
    // 3. 两个子节点
    deleteByValue(node) {
        let p = this.root,
            pp = null;
        while (p && p.node !== node) {
            pp = p;
            if (p.node > node) {
                p = p.left;
            } else {
                p = p.right;
            }
        }
        if (p == null) return null;
        // 删除节点含有两个子树
        if (p.left && p.right) {
            // 找到右子树节点的最小节点
            let minPP = p; // 记录最小节点的父节点
            let minP = p.right;
            while (minP && minP.left !== null) {
                minPP = minP;
                minP = minP.left;
            }
            p.node = minP.node;
            p = minP;
            pp = minPP;
        }

        debugger;

        // 删除节点含有一个或者0
        let child = null;
        if (p.left) {
            child = p.left;
        } else if (p.right) {
            child = p.right;
        } else {
            child = null;
        }

        // 删除的是根节点
        if (pp === null) {
            this.root = child;
        } else if (pp.left == p) {
            pp.left = child;
        } else {
            pp.right = child;
        }

        return pp;
    }

    // find min node
    findMinNode() {}
}

// result
let binaryTree = new BinaryTree();
binaryTree.insert(13);
binaryTree.insert(8);
binaryTree.insert(18);
binaryTree.insert(6);
binaryTree.insert(10);
binaryTree.insert(16);
binaryTree.insert(20);
binaryTree.insert(18);
binaryTree.insert(19);
console.log("插入结果为：", binaryTree.root);
console.log("查找 18 结果为：", binaryTree.findByValue(18));
console.log("查找 18 非递归实现结果为：", binaryTree.findByValueII(18));
console.log("查找 2 结果为：", binaryTree.findByValue(2));
console.log("查找 9 结果为：", binaryTree.findByValue(9));
console.log("删除 8 结果为：", binaryTree.deleteByValue(8));
