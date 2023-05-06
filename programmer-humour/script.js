document.addEventListener("DOMContentLoaded", () => {
  const comicContainer = document.getElementById("comic-container");

  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const img = document.createElement("img");
      img.src = data.img;
      img.alt = data.alt;

      comicContainer.innerHTML = "";
      comicContainer.appendChild(img);
    })
    .catch((error) => {
      console.log("Error:", error);
      comicContainer.innerHTML = "<h1>Error loading xkcd Comic</h1>";
    });
});
