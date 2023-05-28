let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function receipt (order){
let totalOfOneRow = 0;
let total = 0;
console.log("QTY   ITEM               TOTAL");
for (const {itemName, quantity, unitPrice} of order){
  totalOfOneRow = (unitPrice*quantity); 
  console.log(`${quantity}     ${itemName.padEnd(16)}   ${totalOfOneRow.toFixed(2)}`);
  total = total + totalOfOneRow;
}
console.log(`Total: ${total}`);
}

receipt(order);
