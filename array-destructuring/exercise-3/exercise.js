let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let grandTotal = 0;

console.log("QTY\tITEM\t\t\t\tTOTAL");

order.forEach(({ quantity, itemName, unitPrice }) => {
  const total = unitPrice * quantity;
  grandTotal += total;
  console.log(`${quantity}\t${itemName}\t\t${total.toFixed(2)}`);
});

console.log("\nTotal: ", grandTotal.toFixed(2));
