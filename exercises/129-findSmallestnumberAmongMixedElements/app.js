const findSmallestNumberAmongMixedElements = (arr) => {
  // your code here
  let result = 0;
	let count = 100;
	let num;
	for (var i = 0; i < arr.length; i++){
		if (typeof (arr[i]) === "number"){
			num = arr[i];
			if (num < count){
				count = num;
				result = num;
			}
		}
	}
	return result;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4