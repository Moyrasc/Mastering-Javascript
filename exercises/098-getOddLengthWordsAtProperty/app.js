// Write your function here
let obj = {
    key:["It","has","some","words"]
};

const getOddLengthWordsAtProperty= (obj,key)=>{  
    let word =[]
    if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0){
      for (var elem in obj[key])
      {
        if(obj[key][elem] %2 != 0)
          word.push(obj[key][elem])
      }
    }
    return word
}

