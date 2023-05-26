function sales(carsSold) {
  let totalCars = {};
  let totalFord = 0;
  let totalHonda = 0;
  let totalLandRover = 0;
  let totalToyota = 0;
  for (let car of carsSold) {
    if (car.make === "Ford") {
      totalFord += car.price;
      totalCars.Ford = totalFord;
    } else if (car.make === "Honda") {
      totalHonda += car.price;
      totalCars.Honda = totalHonda;
    } else if (car.make === "Land Rover") {
      totalLandRover += car.price;
      totalCars["Land Rover"] = totalLandRover;
    } else if (car.make === "Toyota") {
      totalToyota += car.price;
      totalCars.Toyota = totalToyota;
    }
  }
  return totalCars;
}

module.exports = sales;
