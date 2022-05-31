function hasHiddenFee(arr, str) {
  let new_arr = arr.map((s) => s.slice(1));
  let sum = 0;
  sum = new_arr.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue)
  );

  return sum < str.substring(1);
}
