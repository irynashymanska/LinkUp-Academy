function tempConversion(c) {
  let f;
  let k;
  if (typeof c === "number") {
    f = (c * 9) / 5 + 32;
    k = c + 273.15;
    return [Number(f.toFixed(2)), Number(k.toFixed(2))];
  } else {
    return "'Invalid'";
  }
}

