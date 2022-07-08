function getLengthOfShortestElement(arr) {
    // your code here
    if( arr.length === 0){ 
        return 0}
        let shortElem = arr[0].length;
        for( let i=0; i<arr.length; i++){
            if(arr[i]< shortElem){
                shortElem = arr[i].length;
            }
            return shortElem;
        }
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3