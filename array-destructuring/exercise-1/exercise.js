const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};
let {name, age, favFood} = personOne

function introduceYourself(person) {
let {name, age, favouriteFood} =person
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
