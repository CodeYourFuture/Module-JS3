let removeVowels = require("./remove-vowels");
let array = ["Irina", "Etza", "Daniel"]

function removeVowelsFromWords(words) {
  console.log(words)
  let resultWord = words.map((word) => {
    return removeVowels(word);
  });
  return resultWord;
}

console.log(removeVowelsFromWords(array))

module.exports = removeVowelsFromWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
