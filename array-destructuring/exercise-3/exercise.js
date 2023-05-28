let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printOrder(order) {
  let totalCost = 0;

  console.log("QTY\tITEM\t\t\t\tTOTAL");

  order.forEach(({ itemName, quantity, unitPrice }) => {
    const totalPrice = quantity * unitPrice;
    totalCost += totalPrice;

    const formattedItem = itemName.padEnd(20);
    const formattedTotal = totalPrice.toFixed(2).toString().padStart(6);

    console.log(`${quantity}\t${formattedItem}\t\t${formattedTotal}`);
  });

  console.log("\nTotal:", totalCost.toFixed(2));
}

printOrder(order);
