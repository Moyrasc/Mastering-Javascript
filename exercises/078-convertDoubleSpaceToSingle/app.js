function convertDoubleSpaceToSingle(str) {
    // your code here
    let noSpace = str.split('  ').join(' ')
    return noSpace
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"