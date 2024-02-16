const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

function introduceYourself(person) {
  console.log(
    `Hello, my name is ${person.name}. I am ${person.age} years old and my favourite food is ${person.favouriteFood}.`
  );
}

introduceYourself(personOne);
