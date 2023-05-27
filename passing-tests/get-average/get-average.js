// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
let numbers = [4, "-", 8, 11, "hello", "57", 0, 2];

function checkIfNumber(element) {
  return typeof element === "number";
}

function average(numbers) {
  let numberArray = numbers.filter(checkIfNumber);

  // where a is the accumulator
  // where b is the current value
  const initialValue = 0;
  const sumWithInitial = numberArray.reduce((a, b) => a + b, initialValue);

  let averageOfNumberArray = sumWithInitial / numberArray.length;
  return averageOfNumberArray;
}

module.exports = average;
