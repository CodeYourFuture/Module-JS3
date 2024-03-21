const imageComic = document.getElementById("imageComic");

function fetchingImg() {
  return fetch("https://xkcd.now.sh/?comic=latest")
    .then((res) => {
      if (!res.ok) {
        throw new Error("error");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      imageComic.src = data.img;
    })
    .catch((error) => {
      console.error("Error fetching comic:");
    });
}
fetchingImg();
