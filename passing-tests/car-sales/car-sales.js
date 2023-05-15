const soldObject ={};    
let priceFord = 0;
let priceHonda = 0;
let priceLandRover = 0;
let priceToyota = 0;
let carsSold = [
  { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
  { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
  { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
  { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
  { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
  { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
  { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
];

function sales(carsSold) {
carsSold.forEach(carSold => {
    if (carSold.make == "Ford") {
      priceFord = priceFord + carSold.price;
      soldObject.Ford = priceFord;
    } else if (carSold.make == "Land Rover") {
      priceLandRover = priceLandRover + carSold.price;
      soldObject["land Rover"] = priceLandRover;
    } else if (carSold.make == "Toyota") {
      priceToyota = priceToyota + carSold.price;
      soldObject.Toyota = priceToyota;
    } else if (carSold.make == "Honda") {
      priceHonda = priceHonda + carSold.price;
      soldObject.Honda = priceHonda;
    } 
});

return soldObject;
}






module.exports = sales;
