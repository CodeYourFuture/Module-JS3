let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(order) {
  console.log("QTY\tITEM\t\t\tTOTAL");
  let totalCost = 0;

  order.forEach(({ itemName, quantity, unitPrice }) => {
    const totalItemPrice = quantity * unitPrice;
    totalCost += totalItemPrice;
    console.log(`${quantity}\t${itemName}\t${totalItemPrice.toFixed(2)}`);
  });

  console.log(`\nTotal: ${totalCost.toFixed(2)}`);
}

printReceipt(order);