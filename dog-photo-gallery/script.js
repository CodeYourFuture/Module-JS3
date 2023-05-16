async function myPhotoData() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await response.json();
  console.log(data);
}