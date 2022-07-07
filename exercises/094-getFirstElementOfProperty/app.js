// Write your function here
let obj = {
    key: [1,2,4]
};


function getFirstElementOfProperty(obj, key){
    let arrInsideObj = obj[key];
    console.log(`[Mostrando lo que contiene mi array auxiliar] ${arrInsideObj}`)
   if (arrInsideObj === undefined || arrInsideObj.length <1 ||!(Array.isArray(arrInsideObj)) ){
            return undefined
        }
        return arrInsideObj[0]
}