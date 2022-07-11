function fromListToObject(array) {
  // your code here
  emptyObject = {}
  for(let i = 0; i < array.length; i++){
  let newArray = array[i];
  emptyObject[newArray[0]] = newArray[1];
  }
  return emptyObject;
  
}


let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }