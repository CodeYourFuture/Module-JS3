async function callAPI() {
await fetch(`https://xkcd.now.sh/?comic=latest`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    buildImgElement(data)
  })
  .catch(function (error) {
    console.log(error)
  });
}

function buildImgElement(input) {
    let imgElement = document.createElement("img");
    imgElement.src = input.img
    document.body.append(imgElement);
}

window.onload = callAPI