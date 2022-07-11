function modulo(num1, num2) {
    // your code here
    if (num1 === 0){
        return 0;
        }
        if (num2 === 0) {
        return NaN;
        }
        if( isNaN(num1) || isNaN(num2)) {
        return NaN;
        }
        var resultIsPositive = true;
        if (num1 < 0) {
        resultIsPositive = false;
        }
        
        num1 = Math.abs(num1);
        num2 = Math.abs(num2);
        
        while (num1 >= num2) {
        num1 = num1 - num2;
        }
        
        if (resultIsPositive) {
        return num1;
        } else {
        return -num1;
        }
}

var output = modulo(25, 4);
console.log(output); // --> 1