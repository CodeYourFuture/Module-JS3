function sales(carsSold) {
  let totals = {};
  for (let car of carsSold) {
    if (!totals[car.make]) {
      totals[car.make] = 0;
    }
    totals[car.make] += car.price;
  }
  return totals;
}

module.exports = sales;
