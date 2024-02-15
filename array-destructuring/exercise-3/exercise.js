let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function makeReceipt(order) {
  let total = 0;
  let itemNameArray = []
  let quantityArray = []
  let itemPriceArray = []

  order.map((item) => {
    const { itemName, quantity, unitPrice } = item;
    total += quantity * unitPrice;
    quantityArray.push(quantity);
    itemNameArray.push(itemName);
    itemPriceArray.push(quantity * unitPrice);
  })

  console.log(`QTY     ITEM                TOTAL`);

  itemNameArray.forEach((itemName, index) => {
    const spaces = " ".repeat(20 - itemName.length);
    console.log(`${quantityArray[index]}       ${itemName}${spaces}$${itemPriceArray[index].toFixed(2)}`);
  })

  console.log(`\nTotal: $${total.toFixed(2)}`);
}

makeReceipt(order);