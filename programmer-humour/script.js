async function callAPI() {
fetch(`https://xkcd.now.sh/?comic=latest`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    buildImgElement(data)
  });
}

function buildImgElement(input) {
    let imgElement = document.createElement("img");
    imgElement.src = input.img
    document.body.append(imgElement);
}

window.onload = callAPI