// Write your function here
const getElementsGreaterThan10AtProperty = (obj,key) =>{
    let arr = [];
    for (let i in obj[key]){
        if(obj[key][i] >10){
            arr.push(obj[key][i]);
        }

    }
 return arr;
}