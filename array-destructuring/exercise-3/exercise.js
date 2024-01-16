let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function receiptForOrder() {
  let largestItemLength = Math.max(...order.map((order) => order.itemName.length));

  let basketTotal = 0;

  order.forEach((item) => {
    const spacing = " ".repeat(largestItemLength - item.itemName.length + 4);
    const pricePenceAndPounds = item.unitPrice + item.quantity;
    console.log(`${item.quantity}    ${item.itemName}${spacing}${pricePenceAndPounds.toFixed(2)}`)
  });

  order.forEach((item) => basketTotal += item.unitPrice * item.quantity) 
  console.log(`\nTotal: ${basketTotal}`)

}

receiptForOrder();