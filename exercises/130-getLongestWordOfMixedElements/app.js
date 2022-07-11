function getLongestWordOfMixedElements(arr) {
    // your code here
    let newArr =""
    let longest =0
    for ( let i =0; i<arr.length; i++)
    {
      if (typeof arr[i] === "string")
          {
            if (arr[i].length > longest)
            {
              newArr = arr[i]
              longest = arr[i].length
            }
          }
    }
  return newArr
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'