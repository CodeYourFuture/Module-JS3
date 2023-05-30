let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let input = ["Irina", "Etza", "Daniel"];
  let expected = ["rn", "tz", "Dnl"];
  // Act
  let result = removeVowelsFromWords(input);
  // Assert
  expect(result).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
