// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

// function average(numbers) {}

// module.exports = average;
function average(numbers) {
    let sum = 0;
    let count = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === 'number') {
        sum += numbers[i];
        count++;
      }
    }
  
    if (count === 0) {
      return 0; // To avoid division by zero if there are no numbers in the array
    }
  
    return sum / count;
  }
  
  module.exports = average;
  
  
  // I start with a function "average" takes an array parameter called "numbers" that contains both numbers and strings.
  // Two variables, "sum" and "count", are initialized to 0. "sum" will keep track of the sum of the numbers, and "count" will keep track of the number of numbers encountered.
  // A for loop is used to iterate over each element of the "numbers" array. The loop starts from index 0 and continues until it reaches the length of the array.
  // Inside the loop, an if statement checks if the current element at index "i" is of type "number" using the "typeof" operator. If the element is a number, it executes the code block inside the if statement.
  // Within the if block, the current number is added to the "sum" variable using the "+=" shorthand notation, incrementing the cumulative sum. Additionally, the "count" variable is incremented by 1 to keep track of the number of valid numbers encountered.
  // After the loop completes, the code checks if the "count" variable is equal to 0. This check is performed to avoid division by zero, which would occur if there are no numbers in the input array. In such a case, the function returns 0.
  // Finally, if there are valid numbers in the array, the function returns the average by dividing the "sum" by the "count". This calculation is performed outside the loop and represents the average of the numbers in the array.
  