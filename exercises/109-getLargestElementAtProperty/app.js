var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    let largestArr = obj[key];
    if(largestArr === undefined || !(Array.isArray(largestArr)|| largestArr.length < 1)){
      return undefined
    }
    return Math.max.apply(null, largestArr);
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4