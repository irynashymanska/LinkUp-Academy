function minMax(array) {
  let min = array[0];
  let max = array[0];

  array.forEach(function (elem) {
    if (elem < min) {
      min = elem;
    }
    if (elem > max) {
      max = elem;
    }
  });

  return [min, max];
}

function sortByLength(array) {
  return [...array].sort((a, b) => a.length - b.length);
}
