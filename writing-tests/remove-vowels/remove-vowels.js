function removeVowels(word) {
  let characters = word.split("");

  let result = [];

  characters.forEach(function (character) {
    if (
      character.toLowerCase() !== "a" &&
      character.toLowerCase() !== "o" &&
      character.toLowerCase() !== "i" &&
      character.toLowerCase() !== "e" &&
      character.toLowerCase() !== "u"
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
