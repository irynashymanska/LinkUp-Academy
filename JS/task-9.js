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

