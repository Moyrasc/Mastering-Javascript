function findSmallestElement(arr) {
    // your code here
    if (arr.length === 0) return 0;

    let smallNum;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < smallNum || smallNum === undefined){
            smallNum = arr[i]
        }

    } 
    return smallNum
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1