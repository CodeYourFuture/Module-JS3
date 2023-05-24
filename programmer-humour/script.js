// Function to make the API call and render the comic image
async function fetchComic() {
    try {
      const response = await fetch('https://xkcd.now.sh/?comic=latest');
      if (!response.ok) {
        throw new Error('Failed to fetch the comic');
      }
      const data = await response.json();
      console.log(data); // Log the received data to the console
      const comicImage = document.getElementById('comic-img');
      comicImage.src = data.img; 
    } catch (error) {
      console.error(error);
    }
  }
  
  window.addEventListener('load', () => {
    fetchComic().catch(error => {
      console.error(error);
    });
  });
  