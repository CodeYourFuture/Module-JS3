// int is an integer
// a factorial is the product of all positive integers which are less than or equal to the initial number.
// note: factorial of 0 is 1

// for example 120 is the factorial of 5
// 1 * 2 * 3 * 4 * 5 = 120

// calculate and return the factorial (120) of int (5)

function factorial(int) {
  let result = 1;
  if (int < 0) {
    // seeing to edge cases (-ve numbers and 0)
    return error;
  } else if (int === 0) {
    return 1;
  } else {
    for (let i = 1; i <= int; i++) {
      result = result * i;
    }
  }
  return result;
}

module.exports = factorial;
