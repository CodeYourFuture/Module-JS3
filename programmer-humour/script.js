function accessToAPI() {
  return fetch("https://xkcd.now.sh/?comic=latest").then((res) => {
    if (!res.ok) {
      return "Error!";
    } else {
      return res.json();
    }
  });
}

function render() {
    accessToAPI().then((data) => {
        const imgTag = document.createElement("img");
        imgTag.setAttribute("src", data.img)
        document.body.append(imgTag);
    })
}

window.onload = render;
