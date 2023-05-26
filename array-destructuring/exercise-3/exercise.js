let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let totals = 0;
let tableHeader = ["QTY", "ITEM", "TOTAL"];

let result = order.map(({quantity: QTY, itemName: ITEM, unitPrice: TOTAL}) => ({
  QTY,
  ITEM, 
  TOTAL, 
  })
);

for(let {QTY, ITEM, TOTAL} of result){
  let totalOrder = QTY * TOTAL;
  totals += totalOrder
}
console.table(result, tableHeader);
console.log(`\nTotal = ${totals}`);