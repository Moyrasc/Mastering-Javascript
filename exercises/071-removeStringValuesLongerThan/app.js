let obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
function removeStringValuesLongerThan(num, obj) {
    // your code here
    for(let value in obj){
        if(obj[value].length> num){
           delete obj[value];
           }
      }return obj 
        }


console.log(removeStringValuesLongerThan(6, obj))