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

fetch("https://www.greetingsapi.com/random")
  .then(function (response) {
    return response.json();
  })
  .then(function (greeting) { let greetText = document.querySelector(#greeting-text); 
    greetText.innerText = `Hello: ${greeting.greeting}`;
    greetText.innerText += `\nLanguage: ${greeting.language}`;
    
  });

// fetch("https://www.greetingsapi.com/random")
//   .then( (response) => {
//     return response.json();
//   })

//   .then(function (result) {
//     let greetingText = document.getElementById("greeting-text");
//     greetingText.textContent=`${result.type.toUpperCase()} it is greeting by ${result.language} Language`
//   })
//   .catch(error => console.error("some thing wrong", error));

  // I use fetch to call the API. This initiates an asynchronous request to the specifies URL. The .then() method is called 
  // on the Response object. The .then() method is used to handle the result of a promise and takes a callback function as its argument. 
  // I then return the response from json to have the promise returned by response.json(). 

