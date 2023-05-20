// - What is the syntax to destructure the object `personOne` in the below exercise?
// - Update the argument of the function `introduceYourself` to use destructuring on the object that gets passed in.

const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

// let { name, age, favouriteFood } = personOne; // You don't need to write this

function introduceYourself({ age, name, favouriteFood }) {
  // Can they can be in jumbled up (not in order)? YES. The order of attributes in an object is not important! In fact, Objects are unordered collections of key-value pairs.
  // So you can put these pairs in any order you want! In functions like the one in line 12, the order of input arguments is important, but in this case the function has just one input which it's type is object!
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
