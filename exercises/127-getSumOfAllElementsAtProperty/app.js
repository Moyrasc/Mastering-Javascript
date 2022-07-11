let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if((typeof obj[key] != "undefined")&& (Array.isArray(obj[key]) && obj[key].length >0))
    {
      let sum =0
      for (let elem in obj[key])
      {
        sum += obj[key][elem]
      }
      return sum
    }
  else return 0
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13