// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

// function factorial(int) {}

// module.exports = factorial;
function factorial(int) {
    if (n < 0) {
      return -1; 
    } else if (int === 0) {
      return 1; 
    } else {
      let result = 1;
      for (let i = 1; i <= int; i++) {
        result *= i; 
      }
      return result;
    }
  }
  
  module.exports = factorial;
  
  // I start with a function "factorial" that Atakes an integer parameter called "int".
  // The first conditional statement checks if "int" is less than 0. If it is, it means the factorial is not defined for negative numbers. In this case, the function returns -1 to indicate an error or invalid input.
  // The second conditional statement checks if "int" is equal to 0. If it is, it means we have reached the base case of the factorial calculation, and the function returns 1. This is because the factorial of 0 is defined as 1.
  // If the above conditions are not met, it means that "int" is a positive integer greater than 0. In this case, the function initialises a variable called "result" to 1. This variable will hold the accumulated product of the numbers from 1 to "int".
  // The code then enters a for loop that starts from 1 and iterates up to the value of "int". In each iteration, the loop multiplies the current value of "result" by the loop variable "i". This operation accumulates the product of all the numbers from 1 to "int" in the "result" variable.
  // After the loop completes, the function returns the final value of "result", which represents the factorial of the input integer.
  // The line "module.exports = factorial;" indicates that the "factorial" function is being exported as a module. This line is typically used when working with modules or when you want to make the function available for use in other parts of your code.
  
  