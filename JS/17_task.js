function skippedLetter(str) {
    let n = false;
    let s;
    for (var i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
            n = true;
            s = String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    if (n===false) 
    {
        s = ("No Missing Letter");
        }
    return s;
     
}

console.log("\n 17. What's the Missing Letter? ");
console.log(skippedLetter('abdefg'));
console.log(skippedLetter('mnopqs'));
console.log(skippedLetter('tuvxyz'));
console.log(skippedLetter('ghijklmno'));

