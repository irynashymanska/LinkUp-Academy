function trace(mat)
{
    let n = mat.length;
    let sum = 0;
    for(let i = 0; i < n; i++)
        sum += mat[i][i];
         
    return sum;
}

console.log("\n 12. Trace That Matrix: ");
 
console.log(trace([
    [1, 0, 1, 0],
    [0, 2, 0, 2],
    [3, 0, 3, 0],
    [0, 4, 0, 4]
  ]
  ));
