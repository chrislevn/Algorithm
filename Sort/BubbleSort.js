function BubbbleSort(array) 
{
  var newArray = [];
  let n = array.length; 
  
  for (var i = 0; i < n - 1; i++) 
  {
    for (var j = 0; j < n - i - 1; j++) 
    {
      if (array[j] > array[j + 1]) 
      {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1]= temp;
      }
    }
  }
  return newArray.concat(array)
}