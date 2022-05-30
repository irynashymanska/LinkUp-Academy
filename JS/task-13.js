function removeSpecialCharacters (str){
    res = str.replace(/[^\w ]/g, '');
    return res;
}
