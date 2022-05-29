const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;

function mathExpr(s) {
  console.log("(%s)  %s", s, re.test(s));
}


console.log("\n 14. Check if a String is a Mathematical Expression (use RegExp): ");
mathExpr("4 + 5");
mathExpr("4*6");
mathExpr("4*no");
