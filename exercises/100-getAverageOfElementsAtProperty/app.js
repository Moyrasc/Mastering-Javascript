function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let total = 0;
  let arrayInsideObject = obj[key];
  if (arrayInsideObject === undefined || arrayInsideObject.length < 1 || !Array.isArray(arrayInsideObject)){
    return total;
  }
  arrayInsideObject.forEach(function(value){
    total += value;
  });
  return total /arrayInsideObject.length;
}



