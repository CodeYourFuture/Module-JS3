// const fetchButton = document.getElementById("fetchButton");
// const gallery = document.getElementById("gallery");

// fetchButton.addEventListener("click", fetchDogPhoto);

// function fetchDogPhoto() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Failed to fetch dog photo.");
//       }
//       return response.json();
//     })
//     .then(data => {
//       const dogPhotoUrl = data.message;
//       const listItem = document.createElement("li");
//       const dogImage = document.createElement("img");
//       dogImage.src = dogPhotoUrl;
//       listItem.appendChild(dogImage);
//       gallery.appendChild(listItem);
//     })
//     .catch(error => {
//       console.log("Error:", error.message);
//     });
// }
const fetchButton = document.getElementById("fetchButton");
const gallery = document.getElementById("gallery");

fetchButton.addEventListener("click", fetchDogPhoto);

function fetchDogPhoto() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch dog photo.");
      }
      return response.json();
    })
    .then(data => {
      const dogPhotoUrl = data.message;
      const listItem = document.createElement("li");
      const dogImage = document.createElement("img");
      dogImage.src = dogPhotoUrl;
      listItem.appendChild(dogImage);
      gallery.appendChild(listItem);
    })
    .catch(error => {
      console.log("Error:", error.message);
    });
}
