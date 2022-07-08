function isRotated(str1, str2) {
    // your code here
    // let nuevaCadena = ''
    // for (let i = str1.length-1; i>=0 ; i--){
    //     nuevaCadena += str1[i]
    //     return nuevaCadena
    //     for(let x = str2.length-1; x>=0 ; x --){

    //     }
    // }

    return str1.split('').reverse().join()
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false