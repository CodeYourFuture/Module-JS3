function updateImage({img, alt}) {
    const imageHtml = document.createElement("img");
    const imageContainer = document.createElement("div")
    const bodyHtml = document.getElementById("body-html");
    imageContainer.classList.add("image-container");
    imageHtml.classList.add("image-html");
    imageHtml.src = img;
    imageHtml.alt = alt;
    imageContainer.appendChild(imageHtml);
    bodyHtml.appendChild(imageContainer);
}



function fetchUrlImage() {
  fetch(`https://xkcd.now.sh/?comic=latest`) // returns a promise and it is pending
    .then(response => response.json()) // returns the promise as fulfilled and gives us a response object which we pass into the callback function
    .then((data) => {
        console.log(data);
        updateImage(data);
    })
    .catch((error) => {
        const errorTextHtml = document.createElement("p");
        const errorMessage = "Sorry image cannot be found";
        errorTextHtml.innerText = errorMessage;
        bodyHtml.appendChild(errorTextHtml);
      console.log(error);
    });
}

fetchUrlImage();
