async function fetchRandomDogImage() {
    try {
    
const response = await fetch('https://dog.ceo/api/breeds/image/random');
const data = await response.json();

if (data.status === 'success') {

        const listItem = document.createElement('li');
        const image = document.createElement('img');
        image.src = data.message;
        listItem.appendChild(image);

        const gallery = document.getElementById('gallery');
        gallery.appendChild(listItem);
} else {
        
        console.error('Failed to fetch dog image:', data.message);
}
    } catch (error) {

console.error('Error fetching dog image:', error);
    }
}

const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', fetchRandomDogImage);