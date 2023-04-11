let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  const input = ["Irina", "Etza", "Daniel"];
  const expectedOutput = ["rn", "tz", "Dnl"];

  const output = removeVowelsFromWords(input);

  expect(output).toEqual(expectedOutput);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]