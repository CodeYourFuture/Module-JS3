const divElement = document.createElement("div");
divElement.classList.add("container");
const imgElement = document.createElement("img");
imgElement.classList.add("photo");
divElement.appendChild(imgElement);
document.body.appendChild(divElement);

function callApi() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      imgElement.src = data.img;
      imgElement.alt = data.alt;
    })
    .catch((error) => {
      console.log(error);
    });
}

callApi();
