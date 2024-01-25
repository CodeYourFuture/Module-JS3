
const getImages = async () => {

    return fetch('https://xkcd.now.sh/?comic=latest').then((data) => {
        const response = data.json();
        return response;
    }).catch(error => {
        console.error('Fetch error:', error);
    });

}

function render() {
    getImages().then((data) => {
        const img = document.createElement('img');
        img.src = data.img;
        document.querySelector('#container').appendChild(img);

    })
}
window.onload = render;