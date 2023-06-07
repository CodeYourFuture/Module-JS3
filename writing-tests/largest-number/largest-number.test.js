let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  let array = [10, 12, 15, 5, 20]
  expect(getLargestNumber(array)).toEqual(20)
  // Arrange
  // Act
  // Assert
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;
test("returns largest number in array", function () {
  let input = [3, 21, 88, 4, 36];
  expect(getLargestNumber(input)).toEqual(88)
})
// also test that the original array hasn't changed
