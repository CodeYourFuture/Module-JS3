let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let words = ["Irina", "Etza", "Daniel"];
  // Act
  let expected = ["rn", "tz", "Dnl"];
  // Assert
  let output = removeVowelsFromWords(words);
  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
