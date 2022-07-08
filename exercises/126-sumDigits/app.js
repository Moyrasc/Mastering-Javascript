function sumDigits(num) {
    // your code here
    num = num.toString()
    let sum =0
    if (num[0] ==='-'){
      for (let i =2; i < num.length; i++){
      sum += Number(num[i])  
    }
      sum += -Number(num[1])
      return sum
    }
  else{
    for (let i =0; i < num.length; i++){
      sum += Number(num[i])
    }
    return sum
}
}
var output = sumDigits(316);
console.log(output); // --> 4