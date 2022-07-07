// Write your function here
const countAllCharacters = (str) =>{
    let letter = {};
    if(str === "") return letter
    for (var i =0; i<str.length; i++){
        if( typeof letter[str[i]] === "undefined")
        {
          letter[str[i]]=1
        }
        else letter[str[i]]+=1
      }
      return letter

}