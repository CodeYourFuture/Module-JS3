const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};
// is equivalent to:
// const personOne.name = "Popeye"
// const personOne.age = 34
// const personOne.favouriteFood = "Spinach"
let {name, age, favouriteFood} = personOne;

function introduceYourself(___________________________) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
