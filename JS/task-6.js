function findLargestNums(mainArray) {
    return mainArray.map(function(subArray) {
      return Math.max.apply(null, subArray);
    });
  }

console.log("\n 6. Find the Largest Numbers in a Group of Arrays: ");
console.log( findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]));