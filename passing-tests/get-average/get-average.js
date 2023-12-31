// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let average = 0;
  let count = 0;
  for (const number of numbers) {
    if (typeof number === "number") {
      average += number;
      count++;
    }
  }
  average = average / count;
  return average;
}
module.exports = average;
