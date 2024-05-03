// Define the order as an array of objects, each object representing an item
let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

//function to calculate the total cost of an item
function calculateTotal(quantity, unitPrice) {
  return quantity * unitPrice;
}

//function to print the receipt
function printReceipt(order) {
  console.log("QTY\tItem\t\t\tTOTAL");

  let totalOrderCost = 0;

  order.array.forEach(element => {
    const total = calculateTotal(item.quantity, item.unitPrice);

    totalOrderCost += total;
    
  });


}