function removeOddValues(obj) {
    // your code here
    Object.entries(obj).forEach(([key, value])=>{
        if(value % 2 !== 0){
            delete(obj[key])

        }
    })
    return obj
}