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

        // a superscript
        const superscript = document.createElement('sup');
        superscript.textContent = '(alt-text)';
        superscript.style.cursor = 'pointer';
        superscript.onclick = function() {
            const p = document.getElementById('moon');
            p.style.display = p.style.display === 'none' ? 'block' : 'none'; 
        };
        moonArmorText.appendChild(superscript);

        // hidden p
        const hiddenP = document.createElement('p');
        hiddenP.textContent = "If you pick a low enough orbit, it gives you a lot of freedom to use a lightweight launch vehicle such as a stepladder.";
        hiddenP.style.display = 'none'; 
        hiddenP.id = 'moon'; // id for easy access
        comicContainer.appendChild(hiddenP);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        comicContainer.textContent = 'Error loading comic. Try again later.';
    });
