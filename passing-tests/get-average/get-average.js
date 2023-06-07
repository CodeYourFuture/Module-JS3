// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {

    let sum = 0;
  let count = 0;
  numbers.forEach(number => {
    if (typeof number === "number" && !isNaN(number)) {
      sum += number;
      count++;
    }
  });
  return count > 0 ? sum / count : 0;
}

module.exports = average;
