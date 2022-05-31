function ascDesNone(array, str) {
    let new_array = array;
    switch (str) {
        case "Asc":
            new_array.sort(function (a, b) { return a - b });
            break;
        case "Des":
            new_array.sort(function (a, b) { return b - a });
            break;
        case "None":
            break;
    }

    return new_array;
}
