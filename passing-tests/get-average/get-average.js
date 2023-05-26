// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let sum = 0;
  let average = 0;
  let numbersOnly = [];
  for (let element of numbers) {
    if (typeof element === "number") {
      numbersOnly.push(element);
      sum += element;
    }
  }
  return (average = sum / numbersOnly.length);
}

module.exports = average;
