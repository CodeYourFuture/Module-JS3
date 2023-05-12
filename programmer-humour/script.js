// <!-- 
// - Inside the same file write a program that gets the `json` using Fetch.
// - A function should make an API call to the given endpoint: `https://xkcd.now.sh/?comic=latest`
// - Log the received data to the console
// - Render the `img` property into an `<img>` tag in the DOM
// - Incorporate error handling -->


function addImage(picLink){
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  let humourImgEl = document.createElement("img");
  humourImgEl.classList.add("humour-image");
  humourImgEl.src = picLink;
  humourImgEl.alt="humorous pic";
  imageContainer.appendChild(humourImgEl);
  let contentContainer = document.getElementById("content-container");
  contentContainer.appendChild(imageContainer);
}

function fetchHumourPic () {
    fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => response.json())
    .then(data => {
        console.log(data.img);
        addImage(data.img);
    })
    .catch(err => console.log(err));
}

let refreshBtn = document.getElementById("refresh-btn");
refreshBtn.addEventListener("click",fetchHumourPic);

