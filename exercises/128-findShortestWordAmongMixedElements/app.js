const findShortestWordAmongMixedElements =(arr) => {
    // your code here
    let result =""
    let short = 1000
    for (let i =0; i<arr.length; i++)
    {
      if (typeof arr[i] === "string")
      {
        if(arr[i].length <short)
        {
          short = arr[i].length
          result = arr[i]
        }
      } 
    }
      return result
}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'