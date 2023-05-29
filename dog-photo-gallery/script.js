let divElement = document.createElement("div");
let ulElement = document.createElement("ul");
divElement.appendChild(ulElement);
let liElement = document.createElement("li");
let imgElement = document.createElement("img");
let buttonElement = document.createElement("button");
buttonElement.innerText = "Click Me!";
divElement.appendChild(buttonElement);
document.body.appendChild(divElement);

buttonElement.addEventListener("click", fetchImage);

function fetchImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      imgElement.src = data.message;
      liElement.appendChild(imgElement);
      ulElement.appendChild(liElement);
    })
    .catch((error) => {
      console.log(error);
    });
}

//HELP, I'm getting error 404 not found. Does this mean this API doesn't exist anymore?
