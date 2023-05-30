function sales(carsSold) {
    let totals={};

    for(let i=0 ;i < carsSold.length;i++ ){
        let car = carsSold[i];
        let make = car.make;

        if (totals[make]) {
            totals[make] += car.price;
            
        } else {
            totals[make] = car.price;
            
        }
    }
    return totals;
}

module.exports = sales;
