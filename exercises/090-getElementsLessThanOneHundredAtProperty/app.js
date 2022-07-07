// Write your function here
const getElementsLessThan100AtProperty = (obj,key) =>{
    let arr =[];
    for(let i in obj[key]){
        if(obj[key][i] < 100){

            arr.push(obj[key][i])

        }
    }
    return arr;

}