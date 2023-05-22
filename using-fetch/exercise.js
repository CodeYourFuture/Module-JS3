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
let greet

fetch("https://codeyourfuture.herokuapp.com/api/greetings")
  .then(function (response) {
    console.log("response", response.text())
    greet = response.text();
    return greet

  })
  // .then((data) => {
  //   console.log("data", data)
  //       return data
  //   });   
 
  
function greetingMessage(greeting) {
    let greetingText = document.querySelector("#greeting-text")
    greetingText.innerHTML = greeting
    // Write the code to display the greeting text here
  }


  // setTimeout(greetingMessage, 1000);
  greetingMessage(greet)
