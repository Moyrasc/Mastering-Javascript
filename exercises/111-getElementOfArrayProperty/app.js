var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    let elementArr= obj[key][index];
    console.log(elementArr);
    if(elementArr === undefined || !(Array.isArray(elementArr)) || elementArr.length < 1 || index >= elementArr.length){
       
    }
    return undefined
}