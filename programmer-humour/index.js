let mainPage = document.getElementById("main");
let imgElement = document.createElement("img");
mainPage.appendChild(imgElement);


fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        imgElement.src=data.img;
    })
    .catch(function (error) {
        console.log(error);
    });