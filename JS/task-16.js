function tempConversion(c){
    let array = [];
    let f = c*9/5 +32;
    let k = c + 273.15;

    array.push(f);
    array.push(k);

    return array;
}
