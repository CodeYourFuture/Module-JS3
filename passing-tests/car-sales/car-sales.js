function sales(carsSold) {
const totals = {};

  for (const car of carsSold) {
    const { make, price } = car;
    if (totals[make]) {
      totals[make] += price;
    } else {
      totals[make] = price;
    }
  }

  return totals;
}

module.exports = sales;
