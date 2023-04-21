let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];



function orderReceipt(){

let totalCost = 0;

order.forEach(({ itemName, quantity, unitPrice }) => {
  const itemTotal = quantity * unitPrice;
  totalCost += itemTotal;

  console.log(`${quantity} ${itemName} @ ${unitPrice.toFixed(2)} = ${itemTotal.toFixed(2)}`);
});

return `Total: ${totalCost.toFixed(2)}`;

}

orderReceipt()