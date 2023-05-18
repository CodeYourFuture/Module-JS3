
// async function getFetchData(){
//     try {
//         let myData = await fetch("https://xkcd.now.sh/?comic=latest")
//         console.log(await myData.json());
//         return showImg(myData);
//     } catch (error) {
//         console.log(`something wrong:`, error);
//     }
// }

// getFetchData()


function getFetchData(){

    fetch("https://xkcd.now.sh/?comic=latest")
    .then((res) => {
        console.log(res);
        let data = res.json()
        console.log(data);
        return data;
    })
    .then((Data) => {
        console.log(Data);
        console.log(Data.title);
        let div = document.getElementById('pic');
        return div.innerHTML = `
        <h2>${Data.title}</h2>
        <img src="${Data.img}" alt="${Data.alt}">
        <span>Day:${Data.day} - Month:${Data.month} - Year:${Data.year}</span>
        `
    })
    .catch((error) => console.log(error));
   
}

getFetchData()

