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
// the names of people who are in Griffindor

function executeTheNames(arrayOfObj){
  let filteredNames = arrayOfObj.filter((singleObject)=>{
    let {firstName, lastName, house} = singleObject
    if(house == "Gryffindor" ){
      console.log(`${firstName} ${lastName}`)
    }
  })
  return filteredNames
}

// executeTheNames(hogwarts)

 // the name of teachers who have pet 

 function getTheNamesOfTeachers(arrayOfObj){
  let filteredTeachers = arrayOfObj.filter((singleObject)=>{
    let {firstName, lastName, pet, occupation} = singleObject
    if(pet !== null && occupation === "Teacher"){
      console.log(firstName, lastName)
    }
  })
  return filteredTeachers
 }

 getTheNamesOfTeachers(hogwarts)