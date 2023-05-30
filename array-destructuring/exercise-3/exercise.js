let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
function orderList(list) {
  console.log(
   ` QTY     ITEM                            TOTAL`
  );
let totalNumber = 0;
  list.forEach(oneOrder => {
    const {itemName, quantity, unitPrice} = oneOrder;
     let total = (Math.round( quantity*unitPrice * 100) / 100).toFixed(2);
     console.log(
      `${quantity.toString().padEnd(9)}${itemName.padEnd(30)}${total.padStart(6)}`
      //`${quantity}     ${itemName}                 ${total}`
       
     );
     totalNumber += Number(total); 
  });
  
  console.log(`Total:${totalNumber.toFixed(2)}`);
}

orderList(order);