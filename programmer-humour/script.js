async function fetchComic(){
    try {
        const response = await fetch('https://xkcd.now.sh/?comic=latest');
        const data = await response.json();
        
        // Log the received data to the console
        console.log(data);

        //render the comic img
        renderComic(data.img);
    } catch (error) {
        //handle errors
        console.error('Error fetching comic:', error);
    }
    }

    //function to render the comic image into the Dom
    function renderComic(imgUrl) {
        const comicContainer = document.getElementById('comicContainer');
        const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    imgElement.alt = 'xkcd Comic';
    imgElement.id = 'comic';
    comicContainer.appendChild(imgElement);
    }
    window.onload = fetchComic;