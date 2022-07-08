var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let squared = [];
    if((typeof obj[key] !="undefined") && Array.isArray(obj[key]) && obj[key].length > 0){
      for (let elem in obj[key]){
        squared.push(Math.pow(obj[key][elem],2))

      }
    }
    return squared;
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]