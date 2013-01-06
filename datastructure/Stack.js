/**
 * 栈数据结构
 * @param {[type]} source [description]
 */
function Stack(source) {
    this.data = source ? source.slice(0) : [];
    this.top = this.data.length - 1;
}
Stack.prototype = {
    empty : function () {
        return this.top === 0;
    },
    push : function (x) {
        this.data[++this.top] = x;
    },
    pop : function () {
        return this.empty() ? null : this.data[this.top--];
    }
};