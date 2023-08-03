const image = document.createElement('img')
const content = document.getElementById('content')



const programmerHumour = () => {

    fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        image.src = data.img;
    })
    .catch(err => console.log('Request Failed', err));

    content.append(image);
}
programmerHumour()