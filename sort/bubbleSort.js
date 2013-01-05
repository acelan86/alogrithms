/**
 * 冒泡排序 原地排序
 * 复杂度: n^2
 * @param  {Array} source 待排序数组
 */
function bubbleSort(source) {
    var i,
        j,
        key,
        len = source.length;

    for (i = 0; i < len; i++) {
        for (j = len - 1; j >= i + 1; j--) {
            if (source[j] < source[j - 1]) {
                key = source[j];
                source[j] = source[j - 1];
                source[j - 1] = key;
            }
        }
    }
}
