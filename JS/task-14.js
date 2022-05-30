const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;

function mathExpr(str) {
  console.log("(%s)  %s", str, re.test(str));
}


console.log("\n 14. Check if a String is a Mathematical Expression (use RegExp): ");
mathExpr("4 + 5");
mathExpr("4*6");
mathExpr("4*no");
