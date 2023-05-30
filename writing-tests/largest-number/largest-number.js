function getLargestNumber(array) {
  let largestNumber;
  for (let i = 0; i < array.length; i++) {
    if (largestNumber === undefined || array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}
module.exports = getLargestNumber;
