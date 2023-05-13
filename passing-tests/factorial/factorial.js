// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
    if (int < 0) {
    throw new Error("Factorial input must be a non-negative integer.");
  }
  let result = 1;
  for (let i = 2; i <= int; i++) {
    result *= i;
  }
  return result;
}

module.exports = factorial;
