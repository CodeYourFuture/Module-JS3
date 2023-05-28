

// define variables 

// const { doc } = require("prettier");

let btn1 = document.getElementById('btn');
// let btn2 = document.getElementById('bttn');
let ulElement = document.getElementById('ul');

// create EventListener to fetch and git data to display it 

btn1.addEventListener('click', fetchingData)

async function fetchingData(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => {
    if (response && response.ok) {
        let data =  response.json()
        return  data
    }
})
.then((data) => {
    return ulElement.innerHTML = `<img src="${data.message}" >`
})

}
