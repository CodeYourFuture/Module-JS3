const comicImage = document.getElementById("comic-image");
async function fetchComic() {
    fetch("https://xkcd.now.sh/?comic=latest").then((response) => {
        if (!response.ok) {
            throw new Error("Can't get data");
        }
        return response.json();
        })
        .then((comic) => {
            console.log(comic);
            comicImage.src = comic.img
        }).catch((error) => {
    console.error("Error fetching image");
})
}

fetchComic();