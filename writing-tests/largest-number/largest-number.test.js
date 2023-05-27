let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let arr = [3, 21, 88, 4, 36];
  let expected = 88;

  // Act
  let result = getLargestNumber(arr);

  // Assert
  expect(result).toEqual(expected);
});

test("original array remains unchanged", function () {
  // Arrange
  let arr = [3, 21, 88, 4, 36];
  let originalArr = [...arr];

  // Act
  getLargestNumber(arr);

  // Assert
  expect(arr).toEqual(originalArr);
});


// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
