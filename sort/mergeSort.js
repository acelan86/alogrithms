/**
 * 合并，合并的两边前提均为有序数组，合并后为有序数组
 * @param  {Array} source  均分的两部分有序数组的数组
 * @param  {Number} start     要合并的起始标识
 * @param  {Number} middle    均分位置标识
 * @param  {Number} end       结束位置标识
 */
function merge(source, start, middle, end) {
    var left = source.slice(start, middle + 1),
        right = source.slice(middle + 1, end + 1),
        i = 0,
        j = 0,
        k;

    //设置哨兵
    left.push(Infinity);
    right.push(Infinity);

    for (k = start; k <= end; k++) {
        if (left[i] <= right[j]) {
            source[k] = left[i++];
        } else {
            source[k] = right[j++];
        }
    }
}

/**
 * 分治排序 原地排序, 左右两边分别进行同样的分治排序，最后合并
 * 复杂度: nlgn
 * @param  {Array}  source 待排序数组
 * @param  {[type]} start  排序的起始位置标识
 * @param  {[type]} end    排序的结束位置标识
 */
function mergeSort(source, start, end) {
    var middle;
    if (start < end) {
        middle = Math.floor((start + end) / 2);
        mergeSort(source, start, middle);   //分治左边部分
        mergeSort(source, middle + 1, end); //分治右边部分
        merge(source, start, middle, end);  //合并已经排序的左右两部分
    }
}