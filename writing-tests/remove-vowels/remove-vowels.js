function removeVowels(word) {
  let characters = word.split("");

  let result = [];

  characters.forEach(function (character) {
    if (
      character !== "a" &&
      character !== "o" &&
      character !== "i" &&
      character !== "e" &&
      character !== "u" &&
      character !== "A" &&
      character !== "O" &&
      character !== "I" &&
      character !== "E" &&
      character !== "U"
    ) {
      result.push(character);
    }
  });

  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  let result = removeVowels('samuel');

  what is the value of result?
*/
