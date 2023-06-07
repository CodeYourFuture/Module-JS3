
const image = document.querySelector('img')
async function comic() {
    try {
    
        const promiseData = await fetch('https://xkcd.now.sh/?comic=latest')
        const data = await promiseData.json()
        console.log(data)
image.setAttribute('src', `${data.img}`)
}
    catch(error){
        (console.error(error))
    }

}

comic()