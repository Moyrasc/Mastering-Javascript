var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    Object.entries(obj).forEach(([key, value])=>{
        
        if( value > num ){
            delete obj[key];
        }
        
    })
    return obj
}
console.log(removeNumbersLargerThan(5,obj))