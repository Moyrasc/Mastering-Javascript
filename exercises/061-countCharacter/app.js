function countCharacter(str, char) {
    // your code here
    let indice = [];
    for(let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char) indice.push(i);
        }
          return indice.length;
      }
console.log(countCharacter("I am a hacker","a"))