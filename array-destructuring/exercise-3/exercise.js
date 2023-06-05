let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
console.log("QTY\tITEM\t\t\tTOTAL");
let total = 0;
order.forEach(({ quantity, itemName, unitPrice }) => {
  if (itemName.length > 14) {
    const totalPrice = unitPrice * quantity;
    console.log(`${quantity}\t${itemName}\t${totalPrice.toFixed(2)}`);
    total += totalPrice;
  } else {
    const totalPrice = unitPrice * quantity;
    console.log(`${quantity}\t${itemName}\t\t${totalPrice.toFixed(2)}`);
    total += totalPrice;
  }
});

console.log("Total: ", total.toFixed(2));
