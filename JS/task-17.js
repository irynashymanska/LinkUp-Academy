function skippedLetter(str) {
    let hasMissingLetter = false;
    let result;
    for (var i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
            hasMissingLetter = true;
            result = String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    if (hasMissingLetter === false) 
    {
        result = ("No Missing Letter");
        }
    return result;
     
}


