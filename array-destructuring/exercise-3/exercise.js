let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


console.log("QTY      ITEM                 TOTAL");
let totalPrice = 0;
order.forEach(({quantity, itemName, unitPrice}) => {
  const itemPrice = `${unitPrice * quantity}`;
  console.log(`${quantity}\t${itemName}\t\t\t\t${itemPrice}`);
  totalPrice = totalPrice + unitPrice * quantity;
})
console.log(`Total: ${totalPrice}`);


// Question: Why doesn't it work when I  do totalPrice = totalPrice + itemPrice in line 16