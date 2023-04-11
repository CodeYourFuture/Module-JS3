// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let validNumbers = numbers.filter(num => typeof num === "number");
  
    const sum = validNumbers.reduce((a, b) => a + b, 0);
    const avg = (sum / validNumbers.length) || 0;
    return avg;
  }
  
  module.exports = average;