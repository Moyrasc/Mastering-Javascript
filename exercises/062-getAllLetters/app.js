function getAllLetters(str) {
    // your code here
    let totaLetters = [];
    totaLetters.push(str)
    totaLetters = Array.from(str)

    return totaLetters
}
console.log(getAllLetters('Radagast'))