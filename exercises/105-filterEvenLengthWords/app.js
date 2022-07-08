function filterEvenLengthWords(words) {
    // your code here
    let filterEven = words.filter(function(e){ return e.length % 2 == 0})
    return filterEven;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']