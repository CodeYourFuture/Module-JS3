let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  let words = ["Irina", "Etza", "Daniel"];
  let expected = ["rn", "tz", "Dnl"];

  let output = removeVowelsFromWords(words);

  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
