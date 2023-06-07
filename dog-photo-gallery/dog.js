const loadButton = document.getElementById('load-button');
const clearButton = document.getElementById('clear-button');
const gallery = document.getElementById('gallery');

loadButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const image = document.createElement('img');
      image.src = data.message;
      const item = document.createElement('li');
      item.appendChild(image);
      gallery.appendChild(item);
    })
    .catch((error) => {
      console.error('There was an error fetching the data:', error);
    });
});

clearButton.addEventListener('click', () => {
  gallery.innerHTML = '';
});
