var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let lastElem = obj[key];
    if (lastElem === undefined || lastElem.length < 1 || !(Array.isArray(lastElem)) ){
      return [];

  }
  lastElem.pop();
  return lastElem;
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]