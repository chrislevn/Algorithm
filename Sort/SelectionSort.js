function SelectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        let min = i; 
        for (var j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j
            }
        }

        if (i !== min) {
            [array[ i ],array[min]]= [array[min],array[ i ]];
        }
    }
    return array;
}