function jazzify(arr){
    return arr.map(e => e.endsWith('7') ? e : `${e}7`);
  }

function sortDescending(str){
    return +str.split('').sort((a,b)=>b-a).join('');
  }
function countTrue(arr)
{
  return arr.filter(Boolean).length;
}



