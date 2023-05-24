let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

console.log("QTY\t\t\tITEM\t\t\t\tTOTAL")
let total = 0;
order.forEach(foodItem => {
  let {itemName, quantity, unitPrice} = foodItem;
  console.log(quantity + "\t\t\t" + itemName + "\t\t\t" + unitPrice)
  total += quantity * unitPrice;
});
console.log(`Total: ${total}`);