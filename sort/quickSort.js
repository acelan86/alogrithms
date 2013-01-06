/**
 * 分区 将选定区域[start, end]根据最后一个中轴值区分成两段，其中左侧均小于中轴，右侧均大于中轴
 * @param  {Array} source  待分区数组
 * @param  {Number} start  标记分区开始位置
 * @param  {Number} end    标记分区结束位置
 * @return {Number}        中轴位置
 */
function partition(source, start, end) {
    var x = source[end], //选中轴
        i = start - 1,   //i标识的位置是第一个大于中轴X的位置
        j,               //j标识的位置是读取的当前数字
        key;
    for (j = start; j <= end - 1; j++) {
        if (source[j] <= x) {
            i++;
            key = source[i];
            source[i] = source[j];
            source[j] = key;
        }
    }
    //将中轴放到中间，此时中轴左边的数均小于中轴，右边均大于中轴
    i++;
    key = source[i];
    source[i] = source[end];
    source[end] = key;
    return i;
}

/**
 * 快速排序，第一次选定最后一个值为中轴，遍历前面的数，一次迭代后中轴左边的值均小于中轴，右边值均大于中轴，迭代对中轴左右两段进行快速排序
 * @param  {Array}  source 待排序数组
 * @param  {Number} start  标记排序区间开始位置
 * @param  {Number} end    标记排序区间结束位置
 */
function quickSort(source, start, end) {
    var middle;
    if (start < end) {
        middle = partition(source, start, end);
        quickSort(source, start, middle - 1);
        quickSort(source, middle + 1, end);
    }
}