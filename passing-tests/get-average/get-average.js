// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let numbersOnly = [];
  let sum = 0;
  let avg = 0;
  for (const element of numbers) {
    if (typeof element === "number") {
      numbersOnly.push(element);
      sum += element;
    }
  }
  return (avg = sum / numbersOnly.length);
}

module.exports = average;
