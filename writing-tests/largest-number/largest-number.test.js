let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let array = [3, 21, 88, 4, 36];
  // Act
  let expected = 88;
  // Assert
  let output = getLargestNumber(array);

  expect(output).toEqual(expected);
  expect(array).toEqual([3, 21, 88, 4, 36]);
  // also test that the original array hasn't changed
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;


