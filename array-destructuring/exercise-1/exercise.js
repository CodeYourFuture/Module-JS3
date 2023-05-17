// - What is the syntax to destructure the object `personOne` in exercise.js?
// - Update the argument of the function `introduceYourself` to use destructuring on the object that gets passed in.

const personOne = {
  name: "Popeye",
  age: 34,
  favoriteFood: "Spinach",
};
const {name, age, favoriteFood} = personOne;

const {firstName, myAge, myFavoriteFood} = introduceYourself;

function introduceYourself(person) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favorite food is ${favoriteFood}.`
  );
}

introduceYourself(personOne);
