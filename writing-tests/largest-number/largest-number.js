function getLargestNumber(array) {
  let largestNumber = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (largestNumber < array[i]) {
      largestNumber = array[i];
    }
  }
  
  return largestNumber;
}

module.exports = getLargestNumber;
