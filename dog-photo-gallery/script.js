


const button = document.getElementById("button");
button.addEventListener("click", getDogImg)
function getDogImg(){
  fetch(`https://dog.ceo/api/breeds/image/random`)
  .then(function (response) {
    if(!response.ok){
      throw new Error("There is an error");
    }
    return response.json();
  })
  .then(function(data){
    const ulEle = document.getElementById("dogpic");
    const listEle = document.createElement("li");
    listEle.className = "list";
    ulEle.appendChild(listEle)
    const imgEle = document.createElement("img");
    imgEle.className = "image";
    imgEle.src = data.message;
    listEle.appendChild(imgEle);


})
.catch((error) => {
      console.error('There was a problem', error);
    });

}