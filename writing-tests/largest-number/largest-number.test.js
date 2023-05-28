// let getLargestNumber = require("./largest-number");

// test("returns largest number in array", function () {
//   // Arrange
//   // Act
//   // Assert
// });

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

const getLargestNumber = require('./largest-number');

test('returns largest number in array', function () {
  // Arrange
  const array = [3, 21, 88, 4, 36];
  const expected = 88;
  const originalArray = [...array];

  // Act
  const result = getLargestNumber(array);

  // Assert
  expect(result).toEqual(expected);
  expect(array).toEqual(originalArray); // Check that the original array hasn't changed
});
