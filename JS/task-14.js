const re = /^[^a-zA-Z !№#^:&]*$/;

function mathExpr(str) {
  return re.test(str);
}

console.log( mathExpr("Z +1"));

