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

const greetingText = document.querySelector("#greeting-text");

fetch("https://www.greetingsapi.com/random")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch greeting");
    }
  })
  .then(function (greeting) {
    greetingText.textContent = `Hello: ${greeting.greeting} \n Language: ${greeting.language} `;
  })
  .catch((error) => {
    console.error("something went wrong :", error);
    greetingText.textContent = "Failed to load greeting";
  });

  // It dose not answer, and i've done it base on it's output on the website.