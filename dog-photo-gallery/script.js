// Get references to the buttons and ul element
const loadDogBtn = document.getElementById('loadDogBtn');
const clearBtn = document.getElementById('clearBtn');
const dogGallery = document.getElementById('dogGallery');

// Function to make API call and load a random dog image
async function loadRandomDog() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) {
      throw new Error('Failed to fetch the dog image');
    }
    const data = await response.json();
    const dogImageURL = data.message;

    // Append the dog image to the ul element
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = dogImageURL;
    img.alt = 'Random Dog';
    li.appendChild(img);
    dogGallery.appendChild(li);
  } catch (error) {
    console.error(error.message);
  }
}

// Function to clear the dog gallery
function clearGallery() {
  dogGallery.innerHTML = '';
}

// Add event listeners to buttons
loadDogBtn.addEventListener('click', loadRandomDog);
clearBtn.addEventListener('click', clearGallery);
