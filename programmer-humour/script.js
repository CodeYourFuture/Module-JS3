// Function to make API call and fetch the latest xkcd comic
function fetchLatestComic() {
    fetch('https://xkcd.now.sh/?comic=latest')
      .then(response => response.json())
      .then(data => {
        const comicImage = document.getElementById('comic-image');
   
        console.log(data);
      })
      
  }
  
  // Call the function to fetch and render the latest comic
  fetchLatestComic();
  