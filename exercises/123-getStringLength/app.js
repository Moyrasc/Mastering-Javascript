function getStringLength(string) {
    // your code here
    let arr = string.split("");
    let count = 0;
  for(let i in arr){
  	count++;
  }
  return count;
}


var output = getStringLength('hello');
console.log(output); // --> 5