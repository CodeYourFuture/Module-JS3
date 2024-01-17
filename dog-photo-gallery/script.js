function addImage(dogPicLink){
  let dogList = document.getElementById("dog-list");
  let dogListItem = document.createElement("li");
  let dogListItemContainer = document.createElement("div");
  dogListItemContainer.classList.add("image-container");
  let dogImgEl = document.createElement("img");
  dogImgEl.classList.add("dog-image");
  dogImgEl.src = dogPicLink;
  dogImgEl.alt="dog pic";
  dogListItemContainer.appendChild(dogImgEl);
  dogListItem.appendChild(dogListItemContainer);
  dogList.appendChild(dogListItem);
}

function fetchDogPic () {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        addImage(data.message);
    })
    .catch(err => console.log(err));
}

let dogBtn = document.getElementById("add-dog-btn");
dogBtn.addEventListener("click",fetchDogPic);

