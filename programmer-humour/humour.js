function getFunnyImage() {
    fetch('https://xkcd.now.sh/?comic=latest')
      .then(response => response.json())
      .then(data => {
        console.log(data);
     const funnyImage = document.getElementById('funnyImage');
      funnyImage.src = data.img;
      })
      .catch(error => {
       console.error('Error');
      });
    
  }
  