const image = document.querySelector("#comic-img");
document.addEventListener("DOMContentLoaded" , setup);

function setup(){
    fetchLastComic();
}

function fetchLastComic(){
    fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) =>{
        console.log(response);
        if (response.ok){
            return response.json();
        }else{
            throw Error("Failed to fetch data");
        }
    })
    .then((data) =>{
        console.log(data);
        console.log(data.img);
        console.log(data.alt);
        image.src = data.img;
        image.alt = data.img;

    })
    .catch((error) =>{
        console.error(error);
        image.src="";
        image.alt = "Faild to load comic img";
    });
}