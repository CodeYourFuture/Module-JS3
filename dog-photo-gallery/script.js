  document.addEventListener('DOMContentLoaded', ()=> {
    const addButton = document.getElementById("addButton");
    const gallery = document.getElementById("Gallery")



    const addDogImage = () => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(response => {
            if(!response.ok) {
                new Error("Failed to fetch dog image.");
            }return response.json();
        })

        .then(data => {
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.src = data.message;
            li.appendChild(img);
            gallery.appendChild(li);
        })
        .catch(error => {
            console.error(error);
        })
    }

    addButton.addEventListener("click", addDogImage);
  });