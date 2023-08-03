const button = document.getElementById("btn")
const dogPhotoList = document.createElement("ul")
const image = document.createElement('img')
const imageContainer = document.getElementById("image-container")


const dogPhotoGallery = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        const list = document.createElement('li')
     image.src = data.message
     list.append(image)
     dogPhotoList.appendChild(list)
     imageContainer.append(dogPhotoList)
    })
        .catch(err => console.log('Request Failed', err));

}


button.addEventListener('click', dogPhotoGallery)
