let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printOrder(order) {
  let total = 0;
  const title = ["QTY", "ITEM", "TOTAL"];
  console.log(`${title[0].padEnd(8)}${title[1].padEnd(20)}${title[2]}`);
  order.map((orders) => {
    const { quantity, itemName, unitPrice } = orders;
    total += unitPrice * quantity;
    console.log(
      `${quantity.toString().padEnd(8)}${itemName.padEnd(
        20
      )}${unitPrice.toString()}`
    );
  });

  console.log("Total :" + total);
}

printOrder(order);
