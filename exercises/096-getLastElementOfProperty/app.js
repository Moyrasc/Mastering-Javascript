// Write your function here
let obj = {
    key: [1, 2, 5]
  };
const getLastElementOfProperty = (obj,key) =>{
    let arr = obj [key]
    
    // if(arr === undefined || arr.length < 1 || !Array.isArray(arr)){
    //     return undefined
    // }

    // return arr[arr.length-1]

return arr === undefined || arr.length < 1 || !Array.isArray(arr) ?  undefined : arr [arr.length-1]   

}