// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let onlyNumbers = numbers.filter((n) => !isNaN(n) && n !== 0);
  console.log(onlyNumbers);

  let sumOfNumbers = onlyNumbers.reduce(
    (pv, cv) => parseInt(pv) + parseInt(cv)
  );

  console.log(typeof sumOfNumbers);

  return sumOfNumbers / onlyNumbers.length;
}

let numbers = [4, "-", 8, 11, "hello", "57", 0, 2];

console.log(average(numbers));

module.exports = average;
