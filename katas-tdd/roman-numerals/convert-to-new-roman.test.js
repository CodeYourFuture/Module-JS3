const convertToOldRoman = require("./convert-to-old-roman");

test("returns 'IIII' if it passed 4", function () {
  // Arrange
  let number = 4;
  let expected = "IIII";
  
  // Act
  let output = convertToOldRoman(number);
  
  // Assert
  expect(output).toEqual(expected);
});