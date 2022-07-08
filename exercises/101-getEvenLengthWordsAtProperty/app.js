let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let word =[];
    if((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length >0){
      for(let elem in obj[key]){
        if(obj[key][elem]%2 == 0){
          word.push(obj[key][elem])

        }
      }
    }
    return word;
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']