/**
 * 插入排序, 原地对输入的数组进行排序
 * 算法简介：从数组的第二个元素开始对比前面的所有元素，找到自己该插入的位置将自己插入，每次迭代后当前需要排序的元素前面部分均为有序数组。
 * 复杂度：n^2
 * @param  {Array} source 待排序数组
 * @return
 */
function insertionSort(source) {
    var i,
        j = 1,
        key;
    while (key = source[j]) {
        i = j - 1;
        while (i >= 0 && source[i] > key) {
            //排序
            source[i + 1] = source[i];
            i--;
        }
        //key找到了该插入的位置
        source[i + 1] = key;
        j++;
    }
}

