function fetchComic() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const comicContainer = document.getElementById("comicContainer");
      const imgElement = document.createElement("img");
      imgElement.src = data.img;
      imgElement.alt = data.alt;
      comicContainer.appendChild(imgElement);
    })
    .catch((error) => console.error("Error fetching comic:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  fetchComic();
});
