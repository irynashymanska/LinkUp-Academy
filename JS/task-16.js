function tempConversion(c) {
  let f = (c * 9) / 5 + 32;
  let k = c + 273.15;

  return [Number(f.toFixed(2)), Number(k.toFixed(2))];
}

