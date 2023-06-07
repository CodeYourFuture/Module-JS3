const imageDiv = document.getElementById("image-div");

async function fetchJoke() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    const data = response.json();
    return data;
  } catch (error) {
    console.log("ERROR IS:", error);
  }
}

function loadImage(fetchedData) {
  const imageElement = document.createElement("img");
  imageElement.src = fetchedData.img;
  imageElement.className = "image-element";

  imageDiv.appendChild(imageElement);
}

async function initialise() {
  const fetchedData = await fetchJoke();
  loadImage(fetchedData);
}

window.onload = initialise;
