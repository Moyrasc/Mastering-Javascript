function getAllKeys(obj) {
  // your code here
  let arrayToPrint = [];
  for (let key in obj) {
  arrayToPrint.push(key);
  }
  return arrayToPrint; 
  }
  
  obj1 = {
  name : 'Sam',
  age : 25,
  hasPets : true
  }
