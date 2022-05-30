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
    return isBigger;
}
