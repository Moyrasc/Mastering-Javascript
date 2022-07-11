function listAllValues(obj) {
  // your code here
  let result = [];

  for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
  result.push(obj[key]);
  }
  }
  return result;
  }
