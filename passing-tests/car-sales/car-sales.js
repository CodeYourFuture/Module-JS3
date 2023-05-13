function sales(carsSold) {
<<<<<<< Updated upstream
   let totals = {};

  carsSold.forEach(car => {
    if (!totals[car.make]) {
      totals[car.make] = car.price;
    } else {
      totals[car.make] += car.price;
    }
  });
=======
  let totals = {};

  for (let car of carsSold) {
    if (totals[car.make]) {
      totals[car.make] += car.price;
    } else {
      totals[car.make] = car.price;
    }
  }
>>>>>>> Stashed changes

  return totals;
}

module.exports = sales;
