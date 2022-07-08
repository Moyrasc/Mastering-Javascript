function getLongestElement(arr) {
    // your code here
    let newArr='';
    if(arr.length ===0) return newArr;
    let longestElem = 0;
    for (let i=0; i<arr.length;i++){
        if(arr[i].length > longestElem){
            
            longestElem= arr[i].length;
            newArr = arr[i]
          
        }
    }
    return newArr;
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'