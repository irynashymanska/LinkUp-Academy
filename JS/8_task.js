const keysAndValues = (obj) => {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let commonArray = [keys, values];
    return commonArray;
  };
  console.log("\n 8. Return the Objects Keys and Values: ");
  console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
  console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
  console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));