function sortIt(arr) {
  return arr.sort((a, b) => {
    const num1 = typeof a === "number" ? a : a[0];
    const num2 = typeof b === "number" ? b : b[0];
    return num1 - num2;
  });
}
