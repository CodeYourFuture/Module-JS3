let myData
function fetchHumor(){
  return fetch(`https://xkcd.now.sh/?comic=latest`)
    .then((response) => {
      if (response.ok){
        return response.json();
      } else {
        console.log("Error") 
      }
    })
    .then((data) => {
        myData = data
        
      console.log("data", myData)
    });   
}
fetchHumor()


function createImage(){
     let mainDiv = document.querySelector("#mainDiv")
    let imageURL = myData.img

    let image = document.createElement("img")
    image.src = imageURL
    mainDiv.appendChild(image)
}

setTimeout(createImage, 1000); 
 console.log("data1", myData)



