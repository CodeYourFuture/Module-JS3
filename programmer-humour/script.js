const divEle = document.getElementById("div_card");
const titleEle = document.createElement("h1");
titleEle.className = "title";
const imgEle = document.createElement("img");
const footerEle = document.createElement("footer");
footerEle.className = "footer";
divEle.append(titleEle,imgEle,footerEle);


function fetchData() {
    fetch("https://xkcd.now.sh/?comic=latest")
        .then(response => {
            return response.json();
            })
        .then(data => {
            console.log(data);
            imgEle.src = data.img;
            titleEle.innerText = data.title;
            footerEle.innerText =`${data.day}-${data.month}-${data.year}`;
        })
        .catch(error => {
            console.error(error);
             
        });
}

fetchData();