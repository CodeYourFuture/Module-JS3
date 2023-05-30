function removeVowels(word) {
  let characters = word.split("");

  let result = [];

  characters.forEach(function (character) {
    let lowercaseChar = character.toLowerCase();
    if (
      lowercaseChar !== "a" &&
      lowercaseChar !== "o" &&
      lowercaseChar !== "i" &&
      lowercaseChar !== "e" &&
      lowercaseChar !== "u"
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
  ///////////The value of result when calling removeVowels('samuel') is 'sml'./////////////
*/
