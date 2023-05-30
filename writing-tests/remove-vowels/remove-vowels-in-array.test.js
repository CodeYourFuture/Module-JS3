let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  expect(removeVowelsFromWords(["Irina", "Etza", "Daniel"]))
  .toStrictEqual(["rn", "tz", "Dnl"]);

});