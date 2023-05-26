const fetchButton = document.getElementById("fetchButton");
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
      const ulElem = document.getElementById("gallery");
      const listItem = document.createElement("li");
      listItem.id = "list-item";
    
      const dogImage = document.createElement("img");
      dogImage.id = "dog-img";
      dogImage.src = data.message;
    
      ulElem.appendChild(listItem)
      listItem.appendChild(dogImage);
    })
    .catch(error => {
      console.log("There was a problem.", error);
    });
}

const clearGalleryBtn = document.getElementById("clearGalleryBtn");
clearGalleryBtn.addEventListener("click", clearGallery);

function clearGallery(){
  const dogGallery = document.getElementById("gallery");
  dogGallery.innerHTML = "";
}
  


