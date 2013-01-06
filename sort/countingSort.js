/**
 * 计数排序，非原地排序，通过额外的记录项counter统计某个待排序值该出现的位置填入。
 * @param  {Array} source  待排序数组
 * @return {Array}        排序完的数组
 */
function countingSort(source) {
    var result = [],
        counter = [],
        i = 0,
        key;
    for(i = 0; i < source.length; i++) {
        key = source[i];
        counter[key] = (counter[key] || 0) + 1;
    }
    for (i = 1; i < counter.length; i++) {
        counter[i] = (counter[i] || 0) + (counter[i - 1] || 0);
    }
    for (i = source.length - 1; i >= 0; i--) {
        result[counter[source[i]] - 1] = source[i];
        counter[source[i]]--;
    }
    return result;
}