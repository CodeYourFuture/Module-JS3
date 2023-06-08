function sales(carsSold) {
    let totals = {}
    
    for (let car of carsSold) {
       let {make, price} = car;
    if (totals.hasOwnProperty(make)) {
        totals[make] += price;
    } else {
        totals[make] = price;
    }
}
    return totals;
}
module.exports = sales;
