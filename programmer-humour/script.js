const api = "https://xkcd.now.sh/?comic=latest"

document.addEventListener('DOMContentLoaded', function () {
  fetchComic(api);
});

function fetchComic(api) {
  fetch(api)
    .then((response) => response.json())
    .then((lastComic) => renderPage(lastComic))
    .catch((error) => showError(error));
}

function renderPage(data) {
  console.log(data);
  const root = document.querySelector("#root")
  const html = htmlGenerator(data.title, data.img, data.alt);

  root.innerHTML = html;
}

function htmlGenerator(title, imageUrl, imageAlt) {
  let html = `<h2>${title}</h2>
    <img src="${imageUrl}" alt="${imageAlt}">
    <p>From <a href="https://xkcd.com/" target="_blank">xkcd.com</a></p>
    </p>`

  return html
}

function showError(error) {
  console.log(error);
  const root = document.querySelector("#root")
  root.innerHTML = `<h2>${error}</h2>`
}