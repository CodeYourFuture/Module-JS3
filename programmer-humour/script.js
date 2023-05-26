async function getLatestComic() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    const data = await response.json();
    console.log(data);
    const comicImage = document.querySelector("#comic-image");
    comicImage.src = data.img;
  } catch (error) {
    console.error(error);
  }
}

window.onload = getLatestComic;
