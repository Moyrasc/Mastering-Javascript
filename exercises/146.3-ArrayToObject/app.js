function transformEmployeeData(array) {
  // your code here
  let tranformEmployeList = [];

  for(let i = 0; i < array.length; i++) {
  let tempData = {};
  for(let e = 0; e < array[i].length; e++) {
  tempData[array[i][e][0]] = array[i][e][1];
  }
  tranformEmployeList.push(tempData);
  }
  
  return tranformEmployeList;
}
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]