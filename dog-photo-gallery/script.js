// Function to make API call and fetch a random dog image
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          const imageURL = data.message;
          const gallery = document.getElementById('gallery');
          const listItem = document.createElement('li');
          const image = document.createElement('img');
          image.src = imageURL;
          listItem.appendChild(image);
          gallery.insertBefore(listItem, gallery.firstChild); // Insert the new image at the beginning of the gallery
      
        } else {
          console.error('Failed to fetch dog image:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
  }
  
  // Function to clear the gallery
  function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
  }
  
  // Event listeners for the fetch and clear buttons
  const fetchButton = document.getElementById('fetchButton');
  fetchButton.addEventListener('click', fetchDogImage);
  
  const clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', clearGallery);
  