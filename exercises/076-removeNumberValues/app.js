var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    Object.entries(obj).forEach(([key,value])=>{
        if(typeof value == "number"){
            delete obj[key]
        }
    })
    return obj
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }

