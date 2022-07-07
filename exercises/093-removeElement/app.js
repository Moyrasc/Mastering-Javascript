// Write your function here
const removeElement = (arr,  discar)=> {
    let arrFilter = arr.filter(function(e){
        return e !== discar
    })
    return arrFilter;
}