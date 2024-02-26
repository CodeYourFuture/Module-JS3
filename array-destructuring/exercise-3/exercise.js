let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage Muff", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printBill(list) {
  let total = 0;
  console.log("QTY", "\t", "ITEM", "\t\t", "TOTAL");
  list.map(({ quantity, itemName, unitPrice }) => {
    console.log(quantity, "\t", itemName, "\t", unitPrice * quantity);
    total += quantity * unitPrice;
  });
  console.log("Total:", total);
}

printBill(order);
