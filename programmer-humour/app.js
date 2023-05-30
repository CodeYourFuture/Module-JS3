// Variables
// Access to img tag
const image = document.querySelector("#comic-img");

//EventListeners
// Implement setup function on load
document.addEventListener("DOMContentLoaded", setup);

// functions
// Implement on load
function setup() {
  fetchLatestComic();
}

// Fetch latest comic
function fetchLatestComic() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      // Check the response
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw Error("Faild to fetch data");
      }
    })
    .then((data) => {
      // check the received data
      console.log(data);
      console.log(data.img);
      console.log(data.alt);
      // Use the received data
      image.src = data.img;
      image.alt = data.img;
    })
    .catch((error) => {
      console.error(error);
      image.src = "";
      image.alt = "Faild to Load comic img";
    });
}
