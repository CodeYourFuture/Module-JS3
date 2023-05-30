let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  // Act
  // Assert
  let input = [3, 21, 88, 4, 36];
  expect(getLargestNumber(input)).toEqual(88);
});

test("the original array hasn't changed", function () {
  let originalArray = [3, 21, 88, 4, 36];
  let copyArray = originalArray.slice();
  getLargestNumber(copyArray);
  expect(copyArray).toEqual(originalArray);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
