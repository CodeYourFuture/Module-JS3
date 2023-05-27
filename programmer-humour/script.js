// Function to make API call and fetch the latest xkcd comic
function fetchLatestComic(websiteAddress) {
    fetch(websiteAddress)
      .then(response => response.json())
      .then(data => {
        const comicImage = document.getElementById('comic-image');
        comicImage.src = data.img;
        comicImage.alt = data.alt;
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching latest comic:', error);
      });
  }
  
  // Function to make API call and fetch a random xkcd comic
  function fetchRandomComic() {
    
        const randomComicNumber = Math.floor(Math.random() * (2000 - 1 + 1) + 1);
        
        const randomComicURL = `https://xkcd.vercel.app/?comic=${randomComicNumber}`; 
        fetchLatestComic(randomComicURL);
      }
      
  
  
  // Event listener for the fetch button
  const fetchButton = document.getElementById('fetchButton');
  fetchButton.addEventListener('click', fetchRandomComic);
  
  // Call the function to fetch and render the latest comic on page load
  window.addEventListener('load', fetchLatestComic('https://xkcd.now.sh/?comic=latest'));
  