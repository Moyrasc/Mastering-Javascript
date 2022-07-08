function findShortestElement(arr) {
    // your code here
    let newArr=''
    if(arr.length === 0) return newArr;
    
    let shortElem;
    
    for(let i=0; i<arr.length;i++){
        
        if(arr[i].length < shortElem || shortElem === undefined){
            
            shortElem = arr[i].length;
            newArr = arr[i]
            
            
        }
    }
    return newArr;
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'