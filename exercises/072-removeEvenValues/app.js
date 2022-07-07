let obj = {
    a: 2,
    b: 3,
    c: 4
  };
function removeEvenValues(obj) {
    // your code here
    Object.entries(obj).forEach(([key,value])=>{
        if(value % 2 == 0){
            delete obj[key]
        }
    })
    return obj
}
console.log(obj)