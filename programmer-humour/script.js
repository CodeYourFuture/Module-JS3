const titleElement = document.getElementById("title");
const comicImageElement = document.getElementById("comic-img");
const dateElement = document.getElementById("date");
const comicNumberElement = document.getElementById("comic-number");

// Function to fetch and display XKCD comic
function fetchXKCDComic() {
    fetch("https://xkcd.now.sh/?comic=latest")
        .then(response => response.json())
        .then(data => {
            // Logging the data to the console
            console.log(data);

            // Setting the comic title
            titleElement.textContent = data.title;

            // Setting the comic image source
            comicImageElement.src = data.img;

            // Setting the comic publication date
            dateElement.textContent = `Published on ${data.month}/${data.day}`;

            // Setting the comic number
            comicNumberElement.textContent = `Comic Number: ${data.num}`;
        })
        .catch(error => {
            console.error("Error fetching XKCD comic:", error);
            titleElement.textContent = "Error fetching comic";
        });
}

// Calling the function to fetch and display XKCD comic
fetchXKCDComic();
