function Heap(source, heapSize) {
    this.heapSize = heapSize || source.length;
    this.length = source.length;
    this.data = source;
}

Heap.getParentIndex = function (i) {
    return i >> 1; //Math.floor(i / 2);
};
Heap.getLeftIndex = function (i) {
    return i << 1;
};
Heap.getRightIndex = function (i) {
    return i << 1 + 1;
}
Heap.maxHeapify = function (heap, i) {
    var source = heap.data,
        heapSize = heap.getHeapSize(),
        l = Heap.getLeftIndex(i),
        r = Heap.getRightIndex(i),
        largest,
        key;

    if (l <= heapSize && source[l] > source[i]) {
        largest = l;
    } else {
        largest = i;
    }
    if (r <= heapSize && source[r] > source[i]) {
        largest = r;
    }
    if (largest !== i) {
        key = source[i];
        source[i] = source[largest];
        source[largest] = key;
        Heap.maxHeapify(source, largest);
    }
}
/**
 * 创建一个最大堆
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function buildMaxHeap(source) {
    var heap = new Heap(souce),
        souce = heap.data;

    for (i = heap.length >> 1; i >= 0; i--) {
        Heap.maxHeapify(heap, i);
    }
    return heap;
}


function heapSort(source) {
    var heap = buildMaxHeap(source),
        source = heap.data,
        i;

    for (i = heap.getHeapLength(); i >= 1; i--) {
        key = source[0];
        source[0] = source[i];
        heap.heapSize--;
        Heap.maxHeapify(heap, 1);
    }
}