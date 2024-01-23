const rootElem = document.getElementById("root");
const img = document.createElement("img");
const title = document.createElement("h1");
const alt = document.createElement("p");
rootElem.appendChild(title);
rootElem.appendChild(img);
rootElem.appendChild(alt);
// function fetchData() {
    fetch("https://xkcd.now.sh/?comic=latest")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            img.src = data.img;
            img.alt = data.alt;
            title.innerText = data.title;
            alt.innerText = data.alt
        })
        .catch((error) => {
            console.error(error);
        })
