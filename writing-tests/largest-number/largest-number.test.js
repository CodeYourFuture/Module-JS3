let getLargestNumber = require("./largest-number");

// Arrange
// Act
// Assert
test("returns largest number in array", function () {
  let numbers = [3, 21, 88, 36];
  let expected = 88;

  let output = getLargestNumber(numbers);

  expect(output).toEqual(expected);
});

// also test that the original array hasn't changed
test("original array hasn't changed", function () {
  let numbers = [3, 21, 88, 36];
  let copyOfNumbers = [...numbers];

  getLargestNumber(numbers);

  expect(numbers).toEqual(copyOfNumbers);
});
