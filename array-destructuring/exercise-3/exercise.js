let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let total=0;
function printOrder({itemName,quantity,unitPrice}){
  let price=quantity*unitPrice;
  total+=price
  console.log(`${quantity}  ${itemName}           ${price}`);
  return total;
}

console.log(`QTY  Item        Total\n`)
for (const item of order) {
  printOrder(item);
  
}
console.log('\nTotal: ',total);