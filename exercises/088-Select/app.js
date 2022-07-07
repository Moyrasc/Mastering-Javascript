// Write your function here
// Write your function here
var arr = ["a","b","c"];
var obj = {
    a:1,
    b:2,
    c:3,
    d:4
}

function select (arr, obj){
let a ={}
arr.forEach((element, i) => {
    if(obj[element] !== undefined){
        a[element] = obj[element];
    }
    
});
return a;

}



let output = select (arr, obj);
console.log(output)