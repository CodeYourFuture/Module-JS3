function sales(carsSold) {
  let totals = {};

// "test": "jest --testMatch='**/*.js'",

  for (let i = 0; i < carsSold.length; i++) {
    if (carsSold[i].make in totals) {
      totals[carsSold[i].make] += carsSold[i].price;
    } else totals[carsSold[i].make] = carsSold[i].price;
  }
  return totals;
}

module.exports = sales;
