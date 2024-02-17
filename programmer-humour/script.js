
function fetchComic() {
    return fetch("https://xkcd.now.sh/?comic=latest").then(function (data) {
        console.log("getting the data back ...");
        console.log(data, "data");
        return data.json();
    });
}

fetchComic().then(function (comic) {
    console.log(comic);
});