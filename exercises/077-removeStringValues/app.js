let obj = {
    name: 'Sam',
    age: 20
  }
function removeStringValues(obj) {
    // your code here
    Object.entries(obj).forEach(([key,value])=>{
        if(typeof value == "string"){
            delete obj[key]
        }
    })
    return obj
}


console.log(removeStringValues(obj)); // { age: 20 }