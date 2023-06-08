let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  const input = [3, 21, 88, 4, 36];
  const result = getLargestNumber(input);
  expect(input).toEqual([3, 21, 88, 4, 36]);
  expect(result).toBe(88);
  // Arrange
  // Act
  // Assert
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
