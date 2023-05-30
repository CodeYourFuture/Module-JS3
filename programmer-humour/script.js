let containerEl =  document.createElement('div');
containerEl.className = 'container';
let imgEl = document.createElement('img');
imgEl.className ='image'

await = fetch('https://xkcd.now.sh/?comic=latest')
.then(response => response.json())
.then(data =>{ console.log(data);
    imgEl.src = data.img})
.catch(err => console.log(err))
document.body.appendChild(containerEl);
containerEl.appendChild(imgEl);
