function filterOddLengthWords(words) {
    // your code here
    let filterOdd = words.filter(function(e){return e.length % 2 !== 0})
    return filterOdd
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']