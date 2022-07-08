var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    let newArr =[];
    let arrSmall = obj[key];
    if(arrSmall === undefined || !(Array.isArray(arrSmall)) || arrSmall.length < 1){
      return newArr;  
      }
      return Math.min.apply(null, arrSmall)
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1