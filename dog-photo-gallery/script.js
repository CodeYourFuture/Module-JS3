const dogGalleryUl = document.getElementById("dog-gallery-ul");
const addImgButton = document.getElementById("add-img-button");
const removeAllImgButton = document.getElementById("remove-all-img-button");

async function callDogAPI () {
  try{
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    console.log(response)
    const data =  response.json();
    console.log("data:", data)
    return data
  }
  catch(error) {
    console.log("The ERROR is", error)
  } 
}

addImgButton.addEventListener("click", async() => {
  const newLiElement = document.createElement("li");
  newLiElement.className = "new-li-element";

  const newImageElement = document.createElement("img");
  newImageElement.className = "new-image-element";
  const data = await callDogAPI();
  newImageElement.src = data.message

  newLiElement.appendChild(newImageElement);
  dogGalleryUl.appendChild(newLiElement);
})

removeAllImgButton.addEventListener("click", () => {
  dogGalleryUl.innerText = ""
})

