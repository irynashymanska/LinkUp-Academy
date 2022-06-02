function findLargestNums(mainArray) {
  return mainArray.map(subArray => Math.max.apply(null, subArray));
  }
