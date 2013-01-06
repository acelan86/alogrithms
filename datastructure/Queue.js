function Queue(source) {
    this.data = source ? source.slice(0) : [];
    this.head = 0;
    this.tail = this.data.length - 1;
}
Queue.prototype = {
    enqueue : function (x) {

    },
    dequeue : function () {

    }
};