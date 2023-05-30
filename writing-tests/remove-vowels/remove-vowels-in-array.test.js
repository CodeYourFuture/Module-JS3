let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  let input = ["Irina", "Etza", "Daniel"];
  let output = ["rn", "tz", "Dnl"];
  expect(removeVowelsFromWords(input)).toEqual(output);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
