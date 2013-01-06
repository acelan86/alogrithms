function Heap(source, heapSize) {
    this.heapSize = heapSize || source.length;
    this.length = source.length;
    this.data = source;
}

Heap.getParentIndex = function (i) {
    return i >> 1; //Math.floor(i / 2);
};
Heap.getLeftIndex = function (i) {
    return (i << 1) + 1;
};
Heap.getRightIndex = function (i) {
    return (i << 1) + 2;
};
Heap.maxHeapify = function (heap, i) {
    var source = heap.data,
        l = Heap.getLeftIndex(i),
        r = Heap.getRightIndex(i),
        largest,
        key;

    if (l < heap.heapSize && source[l] > source[i]) {
        largest = l;
    } else {
        largest = i;
    }
    if (r < heap.heapSize && source[r] > source[largest]) {
        largest = r;
    }
    if (largest !== i) {
        //exchange: source[i] <--> source[largest]
        key = source[i];
        source[i] = source[largest];
        source[largest] = key;
        Heap.maxHeapify(heap, largest);
    }
};
/**
 * 创建一个最大堆
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function MaxHeap(source) {
    Heap.call(this, source);
    for (i = (this.length - 1) >> 1; i >= 0; i--) {
        Heap.maxHeapify(this, i);
    }
}


function heapSort(source) {
    var heap = new MaxHeap(source), //用待排序数组建立一个最大堆
        source = heap.data,
        i;

    for (i = heap.length - 1; i >= 0; i--) {
        key = source[0];
        source[0] = source[i];
        source[i] = key;
        heap.heapSize--; //堆排除最后一个最大的元素
        Heap.maxHeapify(heap, 0); //对第一个元素最大堆化
    }
}