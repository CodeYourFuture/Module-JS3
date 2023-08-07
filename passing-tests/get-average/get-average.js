// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
let sum = 0;
let count = 0;

for (const element of numbers) {
    if (typeof element === 'number') {
      sum += element;
      count++;
    }
  }

  if (count === 0) {
    return 0; // To avoid dividing by zero
  }

  return sum / count;
}

module.exports = average;
