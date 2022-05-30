function findLargestNums(mainArray) {
    return mainArray.map(function(subArray) {
      return Math.max.apply(null, subArray);
    });
  }

