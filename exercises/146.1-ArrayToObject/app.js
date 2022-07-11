function transformFirstAndLast(array) {
  // your code here
  let newObject = {};
  let key = array[0];
  let value = array[array.length -1];
  
  newObject[key] = value;
  return newObject;
}

console.log(transformFirstAndLast(['Rosa', 'Maria', 'Joe', 'Alan', 'Abril']));