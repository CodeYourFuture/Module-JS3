let removeVowels = require("./remove-vowels");
let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  const input = ["Irina", "Etza", "Daniel"];
  const result = removeVowelsFromWords(input);
  expect(input).toEqual(["Irina", "Etza", "Daniel"]);
  expect(result).toStrictEqual(["rn", "tz", "Dnl"]);
  // Arrange
  // Act
  // Assert
});

test("remove vowels from all words", function () {
  const input = "Daniel";
  const result = removeVowels(input);
  expect(input).toEqual("Daniel");
  expect(result).toBe("Dnl");
  // Arrange
  // Act
  // Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
