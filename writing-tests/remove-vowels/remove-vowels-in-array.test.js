let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  let input = ["Irina", "Etza", "Daniel"];// Arrange
  // Act
  expect(removeVowelsFromWords(input)).toEqual(["rn", "tz", "Dnl"])// Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
