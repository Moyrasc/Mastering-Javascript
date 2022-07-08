function squareElements(arr) {
  // your code here
  let squareElem = [];
  for (let i= 0; i<arr.length; i++){
    squareElem.push(Math.pow(arr[i],2))
    
  }
  return squareElem;
}


var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]