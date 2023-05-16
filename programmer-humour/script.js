//variables:
let imgDiv = document.querySelector("#img");
let image = document.createElement("img");
let title = document.querySelector("#title");
let day = document.querySelector("#day")
let month = document.querySelector("#month");
let number = document.querySelector("#num");

function funny() {
    
    fetch("https://xkcd.vercel.app/?comic=latest")
      .then((response) => response.json())
        
      .then((result) => {
        console.log(result);
        title.textContent = result.title
       image.src = result.img;
       imgDiv.appendChild(image);
       day.textContent = `day : ${result.day}`;
       month.textContent = ` month : ${result.month}`;
       number.textContent = `number : ${result.num}`

      });
}

funny();