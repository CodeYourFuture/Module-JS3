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


function pupilsInGryffindor() {
  const gryffindorPupils = [];

  hogwarts.forEach((pupil) => {
    const {firstName, lastName, house, pet, occupation} = pupil;
    
    if (house === "Gryffindor") {
      gryffindorPupils.push(`${firstName} ${lastName}`);
    }
  })
  return gryffindorPupils;
}

function teachersWithPets() {
  const teachersWithPets = [];

  hogwarts.forEach((teacher) => {
    const {firstName, lastName, house, pet, occupation} = teacher;

    if(pet !== null && occupation === "Teacher") {
      teachersWithPets.push(`${firstName} ${lastName}`);
    }
  })
      return teachersWithPets;
}

console.log(pupilsInGryffindor());
console.log(teachersWithPets());
