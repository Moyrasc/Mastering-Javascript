function computeProductOfAllElements(arr) {
    // your code here
    if(arr.length > 0){
        let product = 1;
        for(let i =0; i<arr.length; i++){
            product *= arr[i]
        }
        return product;
    }else {
        return 0;
    }
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60