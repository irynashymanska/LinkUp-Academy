function ascDesNone(array, str){
    switch(str){
        case "Asc":
        array.sort(function(a, b){return a-b});
        break;
        case "Des":
        array.sort(function(a, b){return b-a});
        break;
        case "None":
        break;
    }

    return array;
  }

  console.log("\n 9. Let's Sort This Array! ");
  ascDesNone([4, 3, 2, 1], "Asc" );
  console.log( ascDesNone([4, 3, 2, 1], "Asc" ));
  console.log( ascDesNone([1, 2, 3, 4], "Des"));
  console.log( ascDesNone([1, 2, 3, 4], "None"));
