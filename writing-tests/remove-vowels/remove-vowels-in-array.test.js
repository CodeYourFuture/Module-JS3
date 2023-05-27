

let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let input = ["Irina", "Etza", "Daniel"];
  let expected = ["rn", "tz", "Dnl"];

  // Act
  let output = removeVowelsFromWords(input);

  // Assert
  expect(output).toEqual(expected);
});

test("empty array returns empty array", function () {
  // Arrange
  let input = [];
  let expected = [];

  // Act
  let output = removeVowelsFromWords(input);

  // Assert
  expect(output).toEqual(expected);
});

test("array with only vowels returns array with empty strings", function () {
  // Arrange
  let input = ["a", "e", "i", "o", "u"];
  let expected = ["", "", "", "", ""];

  // Act
  let output = removeVowelsFromWords(input);

  // Assert
  expect(output).toEqual(expected);
});

test("array with no vowels returns same array", function () {
  // Arrange
  let input = ["hello", "world", "123"];
  let expected = ["hll", "wrld", "123"];

  // Act
  let output = removeVowelsFromWords(input);

  // Assert
  expect(output).toEqual(expected);
});


// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
