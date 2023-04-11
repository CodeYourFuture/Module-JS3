const order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
];

function pad(value, width) {
  return value.toString().padEnd(width, " ");
}

function printRow(quantity, itemName, totalPrice) {
  console.log(`${pad(quantity, 7)} ${pad(itemName, 19)} ${totalPrice}`);
}

let total = 0;
printRow("QTY", "ITEM", "TOTAL");

for (const {quantity, itemName, unitPrice} of order) {
  printRow(quantity, itemName, (unitPrice * quantity).toFixed(2));
  total += unitPrice * quantity;
}


console.log(`Total: ${total}`);