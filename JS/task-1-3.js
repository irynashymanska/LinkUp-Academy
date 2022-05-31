function jazzify(arr) {
  return arr.map((e) => (e.endsWith("7") ? e : `${e}7`));
}

function countTrue(arr) {
  return arr.filter(Boolean).length;
}

function sortDescending(num) {
  str = num.toString();
  return +str
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
