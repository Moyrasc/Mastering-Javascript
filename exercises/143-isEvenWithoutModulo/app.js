function isEvenWithoutModulo(num) {
    // your code here
    if (num === 0) {
        return true;
        }
        
        num = Math.abs(num);
        
        
        while (num >= 2) {
        num = num - 2;
        }
        
        if (num === 0){
        return true;
        } else {
        return false;
        }
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true