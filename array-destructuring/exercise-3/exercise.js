let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
console.log("QTY     ITEM     TOTAL");
let tot = 0;
const orderfull = order.map(({ quantity, itemName, unitPrice }) => {
  console.log(` ${quantity}  ${itemName}       ${unitPrice}`);
  tot += unitPrice;
});
console.log("\nTotal:", tot.toFixed(2));
