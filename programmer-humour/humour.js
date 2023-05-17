async function get() {
    try {
      const response = await fetch("https://xkcd.now.sh/?comic=latest");
      const data = await response.json();
      getInfoFromData(data);
    } catch (error) {
      console.error(" error", error);
    }
  }
  
  get();
  
  let container = document.querySelector("#container");
  function getInfoFromData(data) {
    let image = document.createElement("img");
    image.className = "image";
    image.src = data.img;
    container.appendChild(image);
  }
  