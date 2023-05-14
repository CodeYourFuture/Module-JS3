const comicImg = document.getElementById("comic-img");

function fetchLatestComic() {
    fetch("https://xkcd.now.sh/?comic=latest")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch comic data.");
            }
        })
        .then(json => {
            console.log(json);
            comicImg.src = json.img;
            comicImg.alt = json.title;
        })
        .catch(error => {
            console.error(error);
            comicImg.src = "";
            comicImg.alt = "Failed to load comic image.";
        });
}

fetchLatestComic();
