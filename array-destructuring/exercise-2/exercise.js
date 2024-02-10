let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// Task 1: Display names of people who belong to Gryffindor house
function displayGryffindorMembers(hogwarts) {
  for (let i = 0; i < hogwarts.length; i++) {
    const { firstName, lastName, house } = hogwarts[i];
    if (house === "Gryffindor") {
      console.log(`${firstName} ${lastName}`);
    }
  }
}

// Task 2: Display names of teachers who have pets
function displayTeachersWithPets(hogwarts) {
  for (let i = 0; i < hogwarts.length; i++) {
    const { firstName, lastName, occupation, pet } = hogwarts[i];
    if (occupation === "Teacher" && pet !== null) {
      console.log(`${firstName} ${lastName}`);
    }
  }
}

// Test Task 1
displayGryffindorMembers(hogwarts);

// Test Task 2
console.log("\nTask 2:");
displayTeachersWithPets(hogwarts);
