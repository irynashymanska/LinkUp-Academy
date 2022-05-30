function trace(mat)
{
    let length = mat.length;
    let sum = 0;
    for(let i = 0; i < length; i++)
        sum += mat[i][i];
         
    return sum;
}

