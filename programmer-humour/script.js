const apiUrl = 'https://xkcd.now.sh/?comic=latest';
const comicContainer = document.getElementById('comic-container');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        //header
        const h1Humor = document.createElement('h1');
        h1Humor.textContent = 'Program Humor';
        //title
        const p = document.createElement('p');
        p.textContent = 'Who knew programmers could be funny?';

        //img for displayin comic
        const img = document.createElement('img');
        img.src = data.img;
        img.alt = data.alt;

        comicContainer.appendChild(h1Humor);
        comicContainer.appendChild(p);
        comicContainer.appendChild(img);


        // hr line
        const hr = document.createElement('hr');
        comicContainer.appendChild(hr);

        // a p for text
        const moonArmorText = document.createElement('p');
        moonArmorText.textContent = 'Moon Landing Mission Profiles';
        comicContainer.appendChild(moonArmorText);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        comicContainer.textContent = 'Error loading comic. Try again later.';
    });
