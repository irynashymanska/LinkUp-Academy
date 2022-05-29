function hasHiddenFee(arr, s){
    let checker;
    let sum = 0;
    let new_arr = arr.map(s => s.slice(1));
    let n = s.substring(1);
 
    
    for(let i = 0; i < arr.length; i++)
     {  
        sum += Number(new_arr[i]);
    }

       if (sum <n){
           checker = true;
       }
       else {
           checker = false;
       }
    console.log("%s, %s", arr, s);
    return checker;
}

console.log("\n 11. No Hidden Fees: ");
console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") );
console.log(hasHiddenFee(["$1", "$2", "$3"], "$6"));
console.log(hasHiddenFee(["$1"], "$4"));