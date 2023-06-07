/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/
// const greetingText = document.querySelector("#greeting-text")
// fetch("https://icanhazdadjoke.com/slack")
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (greeting) {
//     greetingText.textContent = greeting.text
//     // Write the code to display the greeting text here
//   });

fetch("https://official-joke-api.appspot.com/random_joke")
  .then(function (response) {
    console.log('first function in the promise chain');
    console.log(response);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.body);

    return response.json(); 
    // send the API response BODY parsed as JSON into a JS Object through to the NEXT function in the Promise Chain
  })
  .then(function (data) {
    console.log('second function in the promise chain');
    console.log(data);
   
    const {setup, punchline } = data;

    const setupParagraph = document.getElementById("setup");
    const punchlineParagraph = document.getElementById("punchline");

    setupParagraph.textContent = setup;
    punchlineParagraph.textContent = punchline;
  });


  // const getARandomJoke = async () => {
  //   try {
  //     const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  //     const data = await response.json();
  //     const {setup, punchline } = data;
  //     const setupParagraph = document.getElementById("setup");
  //     const punchlineParagraph = document.getElementById("punchline");
  //     setupParagraph.innerText = setup;
  //     punchlineParagraph.innerText = punchline;
  //   } catch (error) {
  //     console.log("Error:", error);
  //     throw error;
  //   }
  // }

  // getARandomJoke();





