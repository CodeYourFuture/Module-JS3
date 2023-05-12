const ul = document.querySelector("#ul-image")
const button = document.querySelector("#btn1");
button.addEventListener("click", getApi)

function getApi(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      let output = '';
      output =`
      <li style="list-style:none;"> 
        <img src="${data.message} " style="height: 300px; width:300px">
      </li>
      `

      ul.innerHTML = output;
      
    })
    .catch((err) => console.log(error))
    
}