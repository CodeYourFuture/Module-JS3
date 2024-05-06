// Function to fetch latest xkcd comic
async function fetchComicData() {
    try {
        const response = await fetch('https://xkcd.now.sh/?comic=latest');
        if (!response.ok) {
            throw new Error('Failed to fetch comic');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Function to render comic image to DOM
async function displayComic() {
    const container = document.getElementById('comic-container');
    const comicData = await fetchComicData();
    if (comicData && comicData.img) {
        const img = document.createElement('img');
        img.src = comicData.img;
        img.alt = comicData.alt;
        container.appendChild(img);
    } else {
        container.textContent = 'Failed to load comic.';
    }
}

// Call displayComic function when the page loads
displayComic();
