function sales(carsSold) {
  let totals = {};
  carsSold.forEach((car) => {
    if (!totals[car.make]) {
      totals[car.make] = car.price;
    } else {
      totals[car.make] += car.price;
    }
  });
  return totals;
}

module.exports = sales;
