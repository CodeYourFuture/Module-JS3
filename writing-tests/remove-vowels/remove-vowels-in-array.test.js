let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  const input = ["Irina", "Etza", "Daniel"];
  const output = ["rn", "tz", "Dnl"];

  const wordsWithoutVowels = removeVowelsFromWords(input);

  expect(output).toEqual(wordsWithoutVowels);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]