const buttonClick = document.querySelector("#btn-click");
const list = document.querySelector("#list-img");
let output = "";

buttonClick.addEventListener("click", getApiResult);

function getApiResult() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((data) => {
      output += `
         <li style="list-style:none" class="col-12 col-sm-5 col-md-3">
           <img src="${data.message}" style="height:250px; width:250px"></img>
         </li>
        `;
      list.innerHTML = output;
    })
    .catch((err) => console.log("Failed to fetch"));
}
