// Write your function here !
function computeAverageOfNumbers(num){
    if (num && num.length > 0){
        let sum = 0;
        for (let i in num){
            sum += num [i];
        }
        return sum / num.length;
    }
    return 0
}

let input = [1,2,3,4,5];
console.log(computeAverageOfNumbers(input));