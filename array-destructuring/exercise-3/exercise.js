let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let columnHeaders = ["QTY", "ITEM", "TOTAL"];
let totalCost = 0;
// Map the order array to a new array with renamed properties, this creates a new object with three properties: QTY, ITEM, and TOTAL. The values for these properties are taken from the variables with the same names in the current iteration of the map() function.
// By wrapping the object literal in parentheses ( ), it allows us to directly return the object without needing to use the return keyword explicitly. This shorthand syntax is often used when you want to create and return a new object quickly and concisely.
// So, the overall purpose of the arrow function is to iterate over the order array, destructure the properties quantity, itemName, and unitPrice, and create a new array (formattedOrder) with renamed properties (QTY, ITEM, and TOTAL).
let formattedOrder = order.map(
  ({ quantity: QTY, itemName: ITEM, unitPrice: TOTAL }) => ({
    QTY,
    ITEM,
    TOTAL,
  })
);
for (const { QTY, ITEM, TOTAL } of formattedOrder) {
  const itemTotal = QTY * TOTAL;
  totalCost += itemTotal;
}
console.table(formattedOrder, columnHeaders);
console.log(`\nTotal: ${totalCost.toFixed(2)}`);

// console.log("QTY\tITEM\t\t\tTOTAL"); // \t: Creates tab character. Used to create spacing between columns.

// let totalCost = 0;

// for (const { quantity, itemName, unitPrice } of order) {
//   const itemTotal = quantity * unitPrice;
//   totalCost += itemTotal;
//   console.log(`${quantity}\t${itemName}\t\t${itemTotal.toFixed(2)}`); // HELP! Extra spacing in Sausage McMuffin line.
// }

// console.log(`\nTotal: ${totalCost.toFixed(2)}`);
