
// Create a button
const clickButton = document.createElement("button");
clickButton.id = 'btn';
clickButton.innerText ="Show Me Dogs";
document.body.appendChild(clickButton);

clickButton.addEventListener("click", showDogs);

function showDogs() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            if (!response.ok) {
           throw new Error("Make sure you are connected to the internet!");
            }
            return response.json();
        })
        .then(dogs => {
            const list = document.createElement("ul");
            list.id = "myList";
            document.body.appendChild(list);
            
            const listEl = document.createElement("li");
            list.appendChild(listEl);

            const image = document.createElement("img");
            listEl.appendChild(image);
            image.src = dogs.message;
    })
}