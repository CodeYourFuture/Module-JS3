// - What is the syntax to destructure the object `personOne` in the below exercise?
// - Update the argument of the function `introduceYourself` to use destructuring on the object that gets passed in.

const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

// let { name, age, favouriteFood } = personOne; // You don't need to write this

function introduceYourself({ age, name, favouriteFood }) {
  // Can they can be in jumbled up (not in order)?
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
