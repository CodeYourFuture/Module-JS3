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


function displayGryffindorNames(hogwartsArray) {
  const peopleInGryffindor=[]
  for (const { firstName, house,} of hogwartsArray) {
    if (house === "Gryffindor") {
      peopleInGryffindor.push(firstName)
       
    }
  }
  return peopleInGryffindor;
}

console.log(displayGryffindorNames(hogwarts))

function displayPetOwner(hogwartsArray) {
  const petOwnerName=[];
  for (const { firstName, pet, occupation} of hogwartsArray) {
    if (pet != null && occupation === "Teacher") {
      petOwnerName.push(firstName)
     
    }
  }
  return teacherNames
}
//console.log(displayPetOwner(hogwarts))