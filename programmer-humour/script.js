const api = https://xkcd.now.sh/?comic=latest

document.addEventListener('DOMContentLoaded', function () {
  fetchComic(api);
  makePageForEpisodes();
});