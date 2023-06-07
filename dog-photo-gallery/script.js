const butn = document.querySelector("#btn1");
const ul = document.querySelector("ul");
const li = document.createElement("li");
ul.appendChild(li);
ul.style.listStyle = "none";

butn.addEventListener("click", function (event) {
  event.preventDefault();
  li.innerHTML = "";
  let img = document.createElement("img");
  li.appendChild(img);
  li.style.textDecorationLine = "";
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      img.src = data.message;
    });
});
