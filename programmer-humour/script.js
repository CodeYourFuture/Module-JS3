const apiUrl = 'https://xkcd.now.sh/?comic=latest';
const comicContainer = document.getElementById('comic-container');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // HTML elements
        createHeader();
        createComicContent(data);
        createHR();
        createMoonArmorText();
        createButtonsDiv();
        createFooter();
    })
    .catch(error => {
        console.error('error:', error);
        comicContainer.textContent = 'Try again.';
    });

// header and p text
function createHeader() {
    const h1Humor = document.createElement('h1');
    h1Humor.textContent = 'Program Humor';
    comicContainer.appendChild(h1Humor);

    const p = document.createElement('p');
    p.textContent = 'Who knew programmers could be funny?';
    comicContainer.appendChild(p);
}

// content image
function createComicContent(data) {
    const img = document.createElement('img');
    img.src = data.img;
    img.alt = data.alt;
    comicContainer.appendChild(img);
}

// hr
function createHR() {
    const hr = document.createElement('hr');
    comicContainer.appendChild(hr);
}

// Moon Armor text and superscript
function createMoonArmorText() {
    const moonArmorText = document.createElement('p');
    moonArmorText.textContent = 'Moon Landing Mission Profiles';
    comicContainer.appendChild(moonArmorText);

    const superscript = document.createElement('sup');
    superscript.textContent = '(alt-text)';
    superscript.style.cursor = 'pointer';
    superscript.addEventListener('click', function() {
        const p = document.getElementById('moon');
        p.style.display = p.style.display === 'none' ? 'block' : 'none'; 
    });
    moonArmorText.appendChild(superscript);

    const hiddenP = document.createElement('p');
    hiddenP.textContent = "If you pick a low enough orbit, it gives you a lot of freedom to use a lightweight launch vehicle such as a stepladder.";
    hiddenP.style.display = 'none'; 
    hiddenP.id = 'moon';
    comicContainer.appendChild(hiddenP);
}

// Button div and buttons
function createButtonsDiv() {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add("btndiv") 

    const archiveButton = createButton('ARCHIVE', 'https://m.xkcd.com/archive/');
    const whatIfButton = createButton('WHAT IF??', 'https://what-if.xkcd.com/');
    const aboutButton = createButton('ABOUT', 'https://xkcd.com/about/');

    buttonsDiv.appendChild(archiveButton);
    buttonsDiv.appendChild(whatIfButton);
    buttonsDiv.appendChild(aboutButton);

    comicContainer.appendChild(buttonsDiv);
}
    function createButton(text, url) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', function() {
        window.location.href = url;
    });
    return button;
}

// Footer
function createFooter() {
    const footer = document.createElement('footer');
    const link = document.createElement('a');
    link.textContent = 'Visit xkcd and have fun';
    link.href = 'https://m.xkcd.com/';
    link.target = '_blank';

    footer.appendChild(link)
    comicContainer.appendChild(footer);
}
