// how to run the tests
// npm test -- --testPathPattern

function sales(carsSold) {
  let totals = {};
  let totalFordSales = 0;
  let totalLandRoverSales = 0;
  let totalToyotaSales = 0;
  let totalHondaSales = 0;

  // how to add an element to an object
  // object.property = value;

  for (const car of carsSold) {
    if (car.make === "Ford") {
      totalFordSales = totalFordSales + car.price;
      totals.Ford = totalFordSales;
    } else if (car.make === "Land Rover") {
      totalLandRoverSales = totalLandRoverSales + car.price;
      totals["Land Rover"] = totalLandRoverSales;
    } else if (car.make === "Toyota") {
      totalToyotaSales = totalToyotaSales + car.price;
      totals.Toyota = totalToyotaSales;
    } else if (car.make === "Honda") {
      totalHondaSales = totalHondaSales + car.price;
      totals.Honda = totalHondaSales;
    }
  }
  return totals;
}

module.exports = sales;
