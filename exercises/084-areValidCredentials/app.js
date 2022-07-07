// Write your function here
const areValidCredentials = (name, pass) =>{
    return name.length>3 && pass.length>=8 ? true : false
}
console.log(areValidCredentials('Ritu','mylongpassword'))