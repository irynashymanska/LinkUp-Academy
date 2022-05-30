function hasHiddenFee(arr, str){
    let isBigger;
    let sum = 0;
    let new_arr = arr.map(s => s.slice(1));
    let total = str.substring(1);
 
    
    for(let i = 0; i < arr.length; i++)
     {  
        sum += Number(new_arr[i]);
    }

       if (sum < total){
        isBigger = true;
       }
       else {
        isBigger = false;
       }
    console.log("%s, %s", arr, str);
    return isBigger;
}

console.log("\n 11. No Hidden Fees: ");
console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") );
console.log(hasHiddenFee(["$1", "$2", "$3"], "$6"));
console.log(hasHiddenFee(["$1"], "$4"));