// expect(output).toEqual(totals);
//let totals = {
//     Ford: 22999,
//     Honda: 8000,
//     "Land Rover": 21000,
//     Toyota: 6500,
//   };

 function sales(carsSold) {
   let totals = {};
   carsSold.forEach((car) => {
     if (totals[car.make] == undefined) {
       totals[car.make] = car.price;
       
     } else {
       totals[car.make] += car.price;
     }
   });
   return totals;
 }

module.exports = sales;
