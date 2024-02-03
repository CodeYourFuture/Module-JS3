const personOne = {
  name: "Laura",
  age: 30,
  favouriteFood: "Rice, Beans, egg and chips",
};

function introduceYourself({ name, age, favouriteFood }) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
