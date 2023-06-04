function createPhoto(object){
    let listOfPhotos = document.querySelector("#photo-gallery")
    let randomList = document.createElement("li")
    randomList.className = "list-element"
    let randomPicture = document.createElement("img")
    randomPicture.className ="image"
    let randomPictureURL = object.message
    randomPicture.src = randomPictureURL

    listOfPhotos.appendChild(randomList)
    randomList.appendChild(randomPicture)
}
let addButton = document.querySelector("button")
    if(addButton){
        addButton.addEventListener("click", fetchPhotoData)
    } else{
        console.log("Error") 
    }


function fetchPhotoData (){
fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => {
      if (response.ok){
        return response.json();
      } else {
        console.log("Error") 
      }
    })
    .then((data) => {
      createPhoto(data)
    })   
}




