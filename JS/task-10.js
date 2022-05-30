function sortIt(arr) {
    return arr.sort((a, b) => {
      let num1 = typeof a === "number" ? a : a[0];
      let num2 = typeof b === "number" ? b : b[0];
      return num1 - num2;
    });
  }
 

 
