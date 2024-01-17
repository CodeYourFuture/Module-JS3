function fetchAPI() {
    return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
        if(!res.ok) {
            return "Error";
        } else {
            return res.json();
        }
    })
}

const ulTag = document.createElement("ul");
ulTag.classList.add("layout");
document.body.appendChild(ulTag)

let liTagsArr = [];

function displayDogImg() {
    return fetchAPI().then((data) => {
        let liTag = document.createElement("li");

        const imgTag = document.createElement("img");
        imgTag.setAttribute("src", data.message);
        imgTag.classList = "dog__img";

        ulTag.appendChild(liTag)
        liTag.appendChild(imgTag);

        liTagsArr.push(liTag);

        return imgTag;
    })
}

let groupButtons = document.createElement("div");
groupButtons.classList.add("add__remove__btn")
ulTag.insertAdjacentElement("afterend", groupButtons);

function addDogBtn() {
    let addDogBtn = document.createElement("button");
    addDogBtn.textContent = "Add";
    addDogBtn.classList.add("add__btn");
    groupButtons.appendChild(addDogBtn);
    
    addDogBtn.addEventListener("click", function () {
        displayDogImg()
    })
}

function removeDogBtn() {
    let removeDogBtn = document.createElement("button");
    removeDogBtn.textContent = "Remove";
    removeDogBtn.classList.add("remove__btn")
    groupButtons.appendChild(removeDogBtn);
    
    removeDogBtn.addEventListener("click", function () { 
        const removeLi = liTagsArr.pop();
        ulTag.removeChild(removeLi);
    })
}

async function render() {
    const imgTag = await displayDogImg();
    addDogBtn();
    removeDogBtn();
}

window.onload = render;

