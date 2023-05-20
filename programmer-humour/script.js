// create a function
// get the `json` using Fetch
// make an API call to: `https://xkcd.now.sh/?comic=latest`
// log the received data to the console
// render the `img` property into an `<img>` tag in the DOM
// incorporate error handling

function humour() {
  return fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error");
      }
    })
    .then((json) => {
      console.log(json);
      const imgElement = document.createElement("img");
      imgElement.src = json.img;
      const imgContainer = document.getElementById("image-container");
      imgContainer.appendChild(imgElement);
    })
    .catch(function (error) {
      console.log(error);
    });
}
humour();
