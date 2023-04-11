function sales(carsSold) {
    const totals = {};
  
    for (car of carsSold) {
      if (totals.hasOwnProperty(car.make)) {
        totals[car.make] += car.price;
      } else {
        totals[car.make] = car.price;
      }
    }
  
    return totals;
  }
  
  module.exports = sales;