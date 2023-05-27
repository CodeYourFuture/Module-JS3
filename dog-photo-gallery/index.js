const nextBtn = document.querySelector("#next");
const showAllBtn = document.querySelector("#showAll");
const list = document.querySelector("ul");
const imagesArr = [];

nextBtn.addEventListener("click", getPhotos);
showAllBtn.addEventListener("click", showAllPhotos);

async function getPhotos() {
  if (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const responseData = await response.json();
  const dogImageUrl = responseData.message;

  imagesArr.push(dogImageUrl);

  const listItem = document.createElement("li");
  const imageEl = document.createElement("img");
  imageEl.setAttribute("src", dogImageUrl);

  list.append(listItem);
  listItem.append(imageEl);
}

function showAllPhotos() {
  list.innerHTML = imagesArr
    .map(
      (imageUrl) => `
    <li>
      <img src="${imageUrl}">
    </li>
  `
    )
    .join("");
}

window.onload = getPhotos;
