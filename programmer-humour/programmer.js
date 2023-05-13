const comicElem = document.getElementById("comic");

fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const imgElem = document.createElement("img");
    imgElem.src = data.img;
    imgElem.alt = data.alt;
    comicElem.appendChild(imgElem);
  })
  .catch((error) => {
    console.log(error);
    const errorElem = document.createElement("p");
    errorElem.textContent = "Failed to load comic. Please try again later.";
    comicElem.appendChild(errorElem);
  });

