fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())
  .then((data) => generateImg(data));

function generateImg(data) {
  const myCont = document.createElement("div");

  const myTitle = document.createElement("h3");
  myTitle.innerText = data.title;

  const myDate = document.createElement("p");
  myDate.id = "date";
  myDate.innerText = `${data.day}/${data.month}/${data.year}`;

  const myImg = document.createElement("img");
  myImg.setAttribute("src", data.img);
  myImg.setAttribute("alt", data.safe_title);

  const mySummary = document.createElement("p");
  mySummary.innerText = data.alt;

  myCont.append(myTitle, myDate, myImg, mySummary);

  document.body.append(myCont);
}
