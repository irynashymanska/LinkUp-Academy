function minMax(array) {
  let arr = [];
  let min=array[0];
  let max=array[0];   // variable to hold the current max/min value.

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

console.log("4. Sort an Array by String Length:");
const array = ["Google", "Apple", "Microsoft"];

const sorted_array = array.sort((a,b) => a.length - b.length);

console.log(sorted_array); 



console.log("\n 5. Find the Smallest and Biggest Numbers: ");
console.log( minMax([1, -2, 3, 1600, 5]));