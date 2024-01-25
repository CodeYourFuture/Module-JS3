const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

function introduceYourself(obj) {
  let { name, age, favouriteFood} = obj;
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
