function removeVowels(word) {
  let characters = word.split("");

  let result = [];

  characters.forEach(function (character) {
    if (
      character !== "A" &&
      character !== "a" &&
      character !== "O" &&
      character !== "o" &&
      character !== "I" &&
      character !== "i" &&
      character !== "E" &&
      character !== "e" &&
      character !== "U" &&
      character !== "u"
    ) {
      result.push(character);
    }
  });

  return result.join("");
}
let word = "Idaniel"

console.log(removeVowels(word));

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  let result = removeVowels('samuel');

  what is the value of result?
*/
