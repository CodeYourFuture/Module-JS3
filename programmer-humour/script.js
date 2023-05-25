async function callAPI() {
fetch(`https://xkcd.now.sh/?comic=latest`)
  .then(function (response) {
    return response.json();
  })
}
