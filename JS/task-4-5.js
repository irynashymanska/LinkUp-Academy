function minMax(array) {
  let arr = [];
  let min=array[0];
  let max=array[0];

  for (var i = 0; i < array.length; i++) {
   
      if (array[i] < min) {
        min = array[i];
    } 
      if (array[i] > max) {
        max = array[i]; 
    }

  }
  arr.push(min);
  arr.push(max);
  return arr;
}

function sortByLength (array){
  sorted_array = array.sort((a,b) => a.length - b.length);
 return sorted_array
}




