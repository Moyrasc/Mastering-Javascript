var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    Object.entries(obj2).forEach(([key,value])=>{
        if(!obj1[key]){
            obj1[key] = value
        }
    });
    return obj1
  }
  console.log(extend(obj1,obj2))