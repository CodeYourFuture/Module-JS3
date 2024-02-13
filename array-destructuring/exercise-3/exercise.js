let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

console.log("QTY\tITEM\t\t\tTOTAL");

order.forEach((item) => {
  let { itemName, quantity, unitPrice } = item;
  const total = (quantity * unitPrice).toFixed(2);
  console.log(`${quantity}\t${itemName.padEnd(20)}${total}`);
});

const totalOrderCost = order.reduce((total, item) => total + item.quantity * item.unitPrice, 0).toFixed(2);
console.log(`\nTotal: ${totalOrderCost}`);
