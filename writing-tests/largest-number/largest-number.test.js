// let getLargestNumber = require("./largest-number");

// test("returns largest number in array", function () {
  // Arrange
  // Act
  // Assert
// });

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
const getLargestNumber = require("./largest-number");

test("returns largest number in array and doesn't modify the original array", function () {
  // Arrange
  const array = [5, 10, 2, 8, 3];
  const originalArray = [...array]; // Create a copy of the original array

  // Act
  const result = getLargestNumber(array);

  // Assert
  expect(result).toBe(10); // The largest number in the array is 10
  expect(array).toEqual(originalArray); // The original array should remain unchanged
});

// In this test case, array is the input array for the getLargestNumber function. We create a copy of the original array using the spread operator ([...array]) and assign it to originalArray. 
// After calling the getLargestNumber function, we assert that the result is equal to the expected largest number (10 in this case) and also check that the array remains the same as originalArray, indicating that the function doesn't modify the original array.