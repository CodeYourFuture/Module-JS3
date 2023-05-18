let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

console.log("QTY\tITEM\t\t\tTOTAL"); // \t: Creates tab character. Used to create spacing between columns.

let totalCost = 0;

for (const { quantity, itemName, unitPrice } of order) {
  const itemTotal = quantity * unitPrice;
  totalCost += itemTotal;
  console.log(`${quantity}\t${itemName}\t\t${itemTotal.toFixed(2)}`); // HELP! Extra spacing in Sausage McMuffin line. Do I use console.table?
}

console.log(`\nTotal: ${totalCost.toFixed(2)}`);
