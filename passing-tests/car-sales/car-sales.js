// function sales(carsSold) {}

// module.exports = sales;
const carSale = {};
let priceFord = 0;
let priceHonda = 0;
let priceLandrover = 0;
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

// The function initializes an empty object called soldObject, which will store the total sales for each car make.
// The function uses the forEach method to iterate over each element in the carsSold array.
// For each car sold, the code checks the value of the make property of the car object using an if statement.
// If the car make is "Ford", the code adds the price of the car to the running total for Ford cars (priceFord). It then assigns the updated total to the Ford property of the soldObject using dot notation (soldObject.Ford = priceFord).
// If the car make is "Land Rover", the code follows a similar process as above, but updates the total for Land Rover cars (priceLandRover) and assigns it to the land Rover property of the soldObject using bracket notation (soldObject["land Rover"] = priceLandRover).
// The code repeats the process for the car makes "Toyota" and "Honda", updating the respective totals (priceToyota and priceHonda) and assigning them to the corresponding properties in the soldObject.
// After iterating through all the cars in the carsSold array, the function returns the soldObject, which now contains the total sales for each car make.


