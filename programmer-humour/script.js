
function getImageFetch(){
  return fetch('https://xkcd.now.sh/?comic=latest').then((response) => {
    if(!response.ok){
        return "Error";
      }else{
        return response.json();
      }
  });
}
getImageFetch();

let imageDiv = document.createElement('div');
document.body.appendChild(imageDiv);

function displayData(){
    
    getImageFetch().then((data) => {
        if(!data){
            console.log("data can not found");
        }
        const image = data.img;

        const createImage = document.createElement('img');
        createImage.src = image;
        imageDiv.appendChild(createImage);
    } )
}
console.log(displayData());

window.onload = displayData;

