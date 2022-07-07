function removeArrayValues(obj) {
    // your code here
    Object.entries(obj).forEach(([key,value])=>{
        if(typeof value == "object"){
            delete obj[key]
        }
    })
    return obj
}
