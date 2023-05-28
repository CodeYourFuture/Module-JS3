// let removeVowelsFromWords = require("./remove-vowels-in-array");

// test("remove vowels from all words in array", function () {
//   // Arrange
//   // Act
//   // Assert
// });

// // example
// // input: ["Irina", "Etza", "Daniel"]
// // expected output: ["rn", "tz", "Dnl"]
const removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const words = ["Irina", "Etza", "Daniel"];
  const expectedOutput = ["rn", "tz", "Dnl"];

  // Act
  const result = removeVowelsFromWords(words);

  // Assert
  expect(result).toEqual(expectedOutput);
});


// I set up the test with const removeVowelsFromWords = require("./remove-vowels-in-array")
// In this test case, we: Arrange: Set up the input array words and the expected output expectedOutput.
// Act: Call the removeVowelsFromWords function with the words array.
// Assert: Use the expect statement to compare the result with the expectedOutput. The toEqual matcher checks if the two arrays are deeply equal.