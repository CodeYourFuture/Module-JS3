let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 1.4 },
];

console.log("QTY     ITEM                TOTAL");
let totalOrderCost = 0;

order.forEach(item => {
  const totalItemCost = item.quantity * item.unitPrice;
  totalOrderCost += totalItemCost;
  console.log(`${item.quantity}\t${item.itemName.padEnd(20)}${totalItemCost.toFixed(2)}`);
});

console.log("\nTotal:", totalOrderCost.toFixed(2));
