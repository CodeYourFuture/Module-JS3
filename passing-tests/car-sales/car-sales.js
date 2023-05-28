function sales(carsSold) {
    let totals = {};

  carsSold.forEach((car) => {
    const { make, price } = car;

    if (totals[make]) {
      totals[make] += price;
    } else {
      totals[make] = price;
    }
  });

  return totals;
}

module.exports = sales;
