// - In `exercise.js`, you have been provided with a takeout order. Write a program that will print out the receipt for this order.
// - Log each individual item to the console.
// - Log the total cost of the order to the console.

let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


function yourOrder (order) {
  let total = 0;

  console.log(`${('QTY').padEnd(8)}${('ITEM').padEnd(20)}${'TOTAL'}`);

  order.forEach(row => {
    const { quantity, itemName, unitPrice } = row;
    total += unitPrice * quantity
    console.log(`${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${unitPrice.toFixed(2)}`);
  });
  console.log(" ")
  console.log(`Total: ${total}`)
}
console.log(yourOrder(order))
// Expected result

// QTY     ITEM                TOTAL
// 1       Hot Cakes           2.29
// 2       Apple Pie           2.78
// 1       Egg McMuffin        2.80
// 1       Sausage McMuffin    3.00
// 2       Hot Coffee          2.00
// 4       Hash Brown          1.60

// Total: 14.47