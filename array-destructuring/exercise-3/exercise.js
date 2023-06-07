let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function receiptForOrder(order) {
  let unitTotalPrice = 0;
  let total = 0;
  order.forEach(({ itemName, quantity, unitPrice }) => {
    unitTotalPrice = unitPrice * quantity;
    console.log(
      `${quantity} ${itemName.padEnd(16)} ${unitTotalPrice.toFixed(2)}`
    );
    total = total + unitTotalPrice;
  });
  console.log(`Total: ${total}`);
}
receiptForOrder(order);
