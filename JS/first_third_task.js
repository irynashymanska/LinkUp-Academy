function jazzify(s){
    let new_S = [];
    for(let i = 0; i<s.length; i++){
        if(!s[i].endsWith("7")){
            new_S.push(s[i]+"7");  
        }
        else {
            new_S.push(s[i]);  
        }
               
       
    }

    return new_S;
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

