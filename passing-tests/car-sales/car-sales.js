function sales(carsSold) {
  let carMakeTotal = {};
  let fordTotal = 0;
  let hondaTotal = 0;
  let landRoverTotal = 0;
  let toyotaTotal = 0;

  for (let car of carsSold) {
    if (car.make === "Ford") {
      fordTotal = fordTotal + car.price;
      carMakeTotal.Ford = fordTotal;
    } else if (car.make === "Toyota") {
      toyotaTotal = toyotaTotal + car.price;
      carMakeTotal.Toyota = toyotaTotal;
    } else if (car.make === "Honda") {
      hondaTotal = hondaTotal + car.price;
      carMakeTotal.Honda = hondaTotal;
    } else if (car.make === "Land Rover") {
      landRoverTotal = landRoverTotal + car.price;
      carMakeTotal["Land Rover"] = landRoverTotal;
    }
  }

  return carMakeTotal;
}

module.exports = sales;
