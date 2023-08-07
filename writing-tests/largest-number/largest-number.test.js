let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
 const input = [3, 21, 88, 4, 36];

  // Act
  const result = getLargestNumber(input);

  // Assert
  expect(result).toBe(88);
});

test("original array remains unchanged", function () {
  // Arrange
  const input = [3, 21, 88, 4, 36];
  const originalArray = [...input]; 

  // Act
  const result = getLargestNumber(input);

  // Assert
  expect(input).toEqual(originalArray); 
});

