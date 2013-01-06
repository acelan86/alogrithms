/**
 * 链表节点
 * @param {[type]}   prev [description]
 * @param {[type]}   key  [description]
 * @param {Function} next [description]
 */
function Node(prev, key, next) {
    this.prev = prev;
    this.key = key;
    this.next = next
}

/**
 * 双向链表
 * @param {[type]} source [description]
 */
function List(source) {
    this.head = null;
    if (source) {
        var i = 0,
            len = source.length,
            key,
            node,
            last = null;
        for (; i < len; i++) {
            key = source[i];
            node  = new Node(last, key, null);
            if (last === null) {
                this.head = node;
            } else {
                last.next = node;
            }
            last = node;
        }
    }
}
List.prototype = {
    //正向遍历列表
    walk : function () {
        var node = this.head,
            r = [];
        while (node) {
            r.push(node.key);
            node = node.next;
        }
        return r;
    },
    //利用递归的逆向输出
    reverse : function (node) {
        if (node.next) {
            this.reverse(node.next);
        }
        console.debug(node.key);
    }
};