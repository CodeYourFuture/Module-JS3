let myData
function fetchHumor(){
fetch(`https://xkcd.now.sh/?comic=latest`)
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
 console.log("data1", myData)


function createImage(){
     let mainDiv = document.querySelector("mainDiv")
    let imageURL = myData.img
    let image = document.createElement("img")
    image.src = imageURL
    mainDiv.appendChild(image)
}

createImage(myData)


