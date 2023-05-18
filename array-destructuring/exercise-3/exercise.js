let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
 

// Task 1: Display the names of people who belong to Gryffindor house
console.log(`each individual total cost of the order
'''
QTY     ITEM                TOTAL
`);
for (const { itemName,quantity ,unitPrice } of order) {
  console.log(`${quantity}     ${itemName}                ${unitPrice*quantity}`);

}