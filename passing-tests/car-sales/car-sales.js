function sales(carsSold) {
    let totals = {};
  
    for (let car of carsSold) {
      let make = car.make;
      let price = car.price;
  
      totals[make] = (totals[make] || 0) + price;
    }
  
    return totals;
  }
  
  module.exports = sales;
  
  