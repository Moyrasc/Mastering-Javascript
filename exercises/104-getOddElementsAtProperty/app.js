var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    let odd = [];
    if((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0){
      for(let elem in obj[key]){
        if(obj[key][elem] % 2 !== 0){
          odd.push(obj[key][elem])
        }
      }
    }
    return odd;
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]