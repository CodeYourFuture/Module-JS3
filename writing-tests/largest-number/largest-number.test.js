let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let input = [3, 21, 88, 4, 36]
  let expected = 88
  // Act
  let result = getLargestNumber(input)
  // Assert
  expect(result).toBe(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

