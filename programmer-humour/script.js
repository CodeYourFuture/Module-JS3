function addImage(data){
  let picLink = data.img;
  let picAlt = data.alt;
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  let humourImgEl = document.createElement("img");
  humourImgEl.classList.add("humour-image");
  humourImgEl.src = picLink;
  humourImgEl.alt=picAlt;
  imageContainer.appendChild(humourImgEl);
  let contentContainer = document.getElementById("content-container");
  contentContainer.innerHTML = "";
  contentContainer.appendChild(imageContainer);
}

function fetchHumourPic () {
    fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        addImage(data);
    })
    .catch(err => {
      let contentContainer = document.getElementById("content-container");
      let errorParaEl = document.createElement("p");
      errorParaEl.classList.add("error-text");
      errorParaEl.textContent = "An error occurred retrieving the joke. Please try again later";
      contentContainer.innerHTML = "";
      contentContainer.appendChild(errorParaEl);
      console.log(err)
    });
}

let refreshBtn = document.getElementById("refresh-btn");
refreshBtn.addEventListener("click",fetchHumourPic);

