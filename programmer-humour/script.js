const comicImage = document.getElementById("comic-img");
function fetchComic() {
    return fetch("https://xkcd.now.sh/?comic=latest")
        .then((data) => data.json());
}

fetchComic().then((comic) => {
    comicImage.src = comic.img
    console.log(comic);
});



