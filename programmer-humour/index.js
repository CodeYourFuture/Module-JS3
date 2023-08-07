const comic_container = document.getElementById('comicContainer')

function fetch_Comic(){
    fetch('https://xkcd.now.sh/?comic=latest').then(response => response.json()).then(data=> {
        console.log(data)

        const comic_Img = document.createElement('img')
        comic_Img.src = data.img

        comic_container.appendChild(comic_Img)
    }).catch(error => {
        console.log('error', error)
    })
}

fetch_Comic();