
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    let arrEven =[]
    if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0){
      for (var elem in obj[key])
      {
        if(obj[key][elem] %2 == 0)
          arrEven.push(obj[key][elem])
      }
    }
   return arrEven
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]