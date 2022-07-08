// Write your function here

    let obj ={
        key:[1,2,6]
    };
    
    
    const getNthElementOfProperty = (obj,key,n) =>{
        
        let arr = obj[key];
        
        if(arr === undefined || arr.length < 1 || n >= arr.length || !Array.isArray(arr)) {
            return undefined
        }
        return arr[n]
    
    
        
    }
