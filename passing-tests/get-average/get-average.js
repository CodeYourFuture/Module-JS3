// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(numbers) {
  let a = numbers.filter((value) => typeof value === "number");

  let sum = a.reduce((acc, curr) => acc + curr);

  let b = sum / a.length;

  return b;
}

module.exports = average;
