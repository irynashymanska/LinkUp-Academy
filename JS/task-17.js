function missingLetter(str) {
  let result = "";
  for (var i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
      result = String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }

  return result || "No Missing Letter";
}
