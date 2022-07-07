function getElementsAfter(array, n) {
  // your code here
  let arr = []
  arr = array.slice(n)
  arr= array.splice(n+1)
  return arr
}