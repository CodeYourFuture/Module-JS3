document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchButton");
  const gallery = document.getElementById("gallery");

  fetchButton.addEventListener("click", fetchRandomDogPhoto);

  function fetchRandomDogPhoto() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const dogPhotoUrl = data.message;
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = dogPhotoUrl;
        li.appendChild(img);
        gallery.appendChild(li);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
});
