// Write your function here
let obj = {
    key:[1000,10,50,10]
};

const getElementsThatEqual10AtProperty = (obj,key) =>{
    let arr =[];
    for(let i in obj[key]){
        if(obj[key][i]===10){
            arr.push(obj[key][i]);
        }
    }
    return arr;
}