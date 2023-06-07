
const image = document.querySelector('img')
function comic() {
    
    
        const promiseData = fetch('https://xkcd.now.sh/?comic=latest')
        promiseData.then(response=> response.json()).then(data=>image.setAttribute('src', `${data.img}`)).catch(error=>console.error(error))
    

}

comic()