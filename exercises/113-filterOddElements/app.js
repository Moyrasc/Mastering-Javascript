function filterOddElements(arr) {
  // your code here
  let OddNum =[];
  for ( let i=0; i<arr.length; i++){
    if ( arr[i] % 2 !== 0){
      OddNum.push(arr[i]);
    }
    
  }
  return OddNum;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]