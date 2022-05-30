function jazzify(arr){
    let new_arr = [];
    for(let i = 0; i<arr.length; i++){
        if(!arr[i].endsWith("7")){
            new_arr.push(arr[i]+"7");  
        }
        else {
            new_arr.push(arr[i]);  
        }       
    }

    return new_arr;
  }

function orderDesc(str){
    return +str.split('').sort((a,b)=>b-a).join('');
  }



const arr = [true, true, false, true];
const count = arr.filter(Boolean).length;

//Couunt of true values
console.log("1. Couunt of true values:");
console.log(count);

//Instant JAZZ:
console.log("\n 2. Instant JAZZ: ");
console.log( jazzify( ["A7","B","C","D7"]));

//Sort Numbers in Descending Order:
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("\n 3. Sort Numbers in Descending Order: ");
readline.question('Enter your numbers: ', numbers => {
  console.log(orderDesc(numbers));
  readline.close();
});

