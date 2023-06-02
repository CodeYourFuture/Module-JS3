function getJokeURL() {
    const apiURL = 'https://xkcd.now.sh/?comic=latest';
    return fetch(apiURL).then((response) => response.json());
  }
  
  function updateJokeImage({ img: src, alt }) {
    const image = document.querySelector('img');
    image.src = src;
    image.alt = alt;
  }
  
  getJokeURL()
    .then((jokeData) => {
      console.log('jokeData: ', jokeData);
      updateJokeImage(jokeData);
    })
    .catch(() => {
      const errorDisplay = document.createElement('p');
      const errorMessage = 'Sorry dog could not be found!';
      errorDisplay.innerText = errorMessage;
      document.body.appendChild(errorDisplay);
    });