let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert
  let phrase = ["having", "lots", "of", "fun"];
  let output = removeVowelsFromWords(phrase);
  expect(output).toEqual(["hvng", "lts", "f", "fn"]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
