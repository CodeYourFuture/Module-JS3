let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printOrder() {
  const orderTable = "QTY\t    ITEM\t                TOTAL\n";
  console.log(`${orderTable}`);
  for (const {itemName, quantity, unitPrice} of order) {
    const totalItemPrice = (quantity * unitPrice).toFixed(2);
    console.log(`${quantity}       ${itemName.padEnd(20)}    ${totalItemPrice}`);
  }  
  const totalPrice = order.reduce((accumulator, {quantity, unitPrice}) =>{
    return accumulator + quantity * unitPrice;
  }, 0)
  console.log(`\nTotal: ${totalPrice.toFixed(2)}`);
}
printOrder();
