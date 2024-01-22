const url=`https://xkcd.now.sh/?comic=latest`;
function getAPI(){
    return fetch(url)
    .then((Response)=>{
        return Response.json();
    })
    .catch((error)=>{
        console.error('An error happened during fetch')
        })
};

getAPI().then((data)=>{
    console.log(data);
    const image=document.getElementById('img');
    image.src=data.img;
})





const baseUrl = "https://xkcd.now.sh/?comic=";

function getAPI2(fetchUrl){
    return fetch(fetchUrl)
    .then((Response)=>{
        return Response.json();
    })
    .catch((error)=>{
        console.error('An error happened during fetch')
        })
};


// I tried to fetch all the images by the code below but I was blocked and i didn't have access to the url

for(let i=0;i<=2883;i++){
    getAPI2(`${baseUrl}+${i}`)
    .then((Response)=>{
        const temp=document.getElementById('template');
        const clone=temp.content.cloneNode(true);
        const img=document.getElementById('temp-image');
        img.src=Response.img;

        document.appendChild(clone);
    })
    
}