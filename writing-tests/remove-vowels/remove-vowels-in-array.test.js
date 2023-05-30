let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert
  let input = ["Irina", "Etza", "Daniel"];
  let expected = ["rn", "tz", "Dnl"];
  let output = removeVowelsFromWords(input);

  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
