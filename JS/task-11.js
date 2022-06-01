function hasHiddenFee(arr, str) {
  const newArr = arr.map((s) => s.slice(1));
  let sum = 0;
  sum = newArr.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue)
  );
  console.log(sum);
  console.log(str.substring(1));
  return sum < Number(str.substring(1));
}
