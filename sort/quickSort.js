function partition(source, start, end) {
    var x = source[end], //选中轴
        i = start - 1,
        j,
        key;
    for (j = start; j <= end - 1; j++) {
        if (source[j] <= x) {
            i++;
            key = source[i];
            source[i] = source[j];
            source[j] = key;
        }
    }
    key = source[i + 1];
    source[i + 1] = source[end];
    source[end] = key;
    return i + 1;
}

function quickSort(source, start, end) {
    var middle;
    if (start < end) {
        middle = partition(source, start, end);
        quickSort(source, start, middle - 1);
        quickSort(souce, middle + 1, end);
    }
}