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
  // Print the header
  console.log("QTY\tItem\t\t\tTOTAL");

  // Initialize total cost of the order
  let totalOrderCost = 0;
// Iterate through each item in the order
  order.array.forEach(element => {

    //  Calculate the total cost of the current item
    const total = calculateTotal(item.quantity, item.unitPrice);

    // Add the total cost of the current item to the total order cost
    totalOrderCost += total;
// Print the quantity, item name, and total cost of the current item
    console.log(`${item.quantity}\t${item.itemName.padEnd(20)}${total.toFixed(2)}`);
  });
// Print the total cost of the order 
console.log("\nTotal:" , totalOrderCost.toFixed(2));
}
// Call the function to print the receipt
printReceipt(order);