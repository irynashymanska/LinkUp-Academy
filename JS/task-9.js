function ascDesNone(array, str) {
    const cloneArray = [...array];
    switch (str) {
        case "Asc":
            cloneArray.sort(function (a, b) { return a - b });
            break;
        case "Des":
            cloneArray.sort(function (a, b) { return b - a });
            break;
        case "None":
            break;
    }

    return cloneArray;
}

