
function programmerHumour(){
    const url = 'https://xkcd.now.sh/?comic=latest';
    return fetch(url)
    .then(res => {
        if(res){
            return res.json();
        }else{
            throw new Error("Encountered something unexpected:Failed to fetch the data ");

        }
    })
    .catch(error=>{console.error(error)});
}
programmerHumour()
.then(humourData=>{
    console.log(humourData);

    const bodyElement = document.getElementById('image');
    const imgElement = document.createElement('img');
    imgElement.src = humourData.img;
    bodyElement.appendChild(imgElement)

    
    


})

