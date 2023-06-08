'use strict'

const fetchDogButton = document.getElementById('fetchDog');
const dogGallery = document.getElementById('dogGallery');

fetchDogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = data.message;
      li.appendChild(img);
      dogGallery.appendChild(li);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
});
