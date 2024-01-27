function extractImagApi() {
    return fetch(`https://xkcd.now.sh/?comic=latest`).then((res) => {
      if (!res.ok) {
        return "Error";
      } else {
        return res.json();
      }
    });
  }
  
  const template = document.createElement('div');
  template.classList.add("template");
  document.body.append(template);
  
  function displayImagToDom() {
    extractImagApi().then((data) => {
     
      if (data === "Error") {
        console.error("Error fetching XKCD API");
        return;
      }
  
      const imageUrl = data.img;
  
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      template.appendChild(imageElement);
    });
  }
  
  displayImagToDom();
  
  
  window.onload = displayImagToDom;
  

  
  