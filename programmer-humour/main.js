let imageElement = document.createElement("img");
document.body.append(imageElement);

fetch("https://xkcd.now.sh/?comic=latest")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    imageElement.src = data.img;
    imageElement.alt = data.alt;
  })
  .catch((error) => {
    console.error(error);
  });
