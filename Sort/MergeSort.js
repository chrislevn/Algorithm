function MergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);
  
    function merge(left, right) {
    let newArray = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) 
      {
        newArray.push(left.shift());
      } else {
        newArray.push(right.shift());
      }
    }
    return newArray.concat(left.slice().concat(right.slice()));
  }
   return merge(MergeSort(left), MergeSort(right));
}