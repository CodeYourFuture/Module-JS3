let removeVowels = require("./remove-vowels");
let input = ["Irina", "Etza", "Daniel"];
function removeVowelsFromWords(words) {
  let result = words.map(function (word) { 

    return removeVowels(word);
  });

  return result;
}
removeVowelsFromWords(input);
module.exports = removeVowelsFromWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
