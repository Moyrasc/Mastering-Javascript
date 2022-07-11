function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let largest = -100;
	let result = 0;
	for (let i = 0; i < arr.length; i++){
		if(typeof arr[i] === "number"){
			if (arr[i] > largest){
				largest = arr[i];
				result = arr[i];
			}
		}
	}
	return result;
}


let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5