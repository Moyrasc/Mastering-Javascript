// Write your function here

const keep = (arr,elem) => {
    
    let newArr = arr.filter(function(e){ return e === elem})
    return newArr
}   