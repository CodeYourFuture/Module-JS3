// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let digits = numbers.filter((num) => typeof num == "number");
  let sum = 0;
  let count = digits.reduce((acc, num) => acc + num, sum);
  return count / digits.length;
}

module.exports = average;
