const personOne = {
  name: "Zeliha",
  age: 46,
  favouriteFood: "Banana",
};

function introduceYourself({name, age, favouriteFood}) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);