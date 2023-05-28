async function fetchData(){
  try {
    const response = await fetch(`https://xkcd.now.sh/?comic=latest`);
   const data = await response.json();
   console.log(data);
   return data.img;
  } catch (error) {
   console.error(error);
  }
}

async function createImage(){
const picture = document.createElement('img');
picture.src = await fetchData();
const comicDiv = document.getElementById('comic');
comicDiv.appendChild(picture);

}


createImage();
