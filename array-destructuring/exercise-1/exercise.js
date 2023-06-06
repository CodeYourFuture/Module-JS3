const personOne = {
  name1: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

let {name1, age, favouriteFood} = personOne;

function introduceYourself() {
  console.log(
    `Hello, my name is ${name1}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
