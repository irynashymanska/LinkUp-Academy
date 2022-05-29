function tempConversion(c){
    let array = [];
    let F = c*9/5 +32;
    let K = c + 273.15;

    array.push(F);
    array.push(K);

    return array;
}

console.log("\n 16. Temperature Conversion: ");

console.log(tempConversion(0)); // 0°C is equal to 32°F and 273.15 K.
console.log(tempConversion(100)); // [212, 373.15]
console.log(tempConversion(-10)); // [14, 263.15]
console.log(tempConversion(300.4)); //[572.72, 573.55]
