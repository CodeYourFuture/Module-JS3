let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
function printOrder (order) {
  console.log(`Quantity Item Total`)
  let total = 0;
  order.forEach((item)=>{
  let {itemName, quantity, unitPrice} = item
  console.log(itemName, quantity, (unitPrice*quantity).toFixed(2));
  total = total + (unitPrice * quantity)
  })
  console.log(`Total: ${total}`)
  }
  
  print order (order);

// I start with a function printOrder that holds an array order. I print the 
//header row with the labels "Quantity," "Item," and "Total" using a 
//template literal. I use the let total to initialise to zero. This variable will 
//store the cumulative total of all items in the order. The order is iterated 
//with the .forEach method. Destructuring is used to extract the 
//itemName, quantity, and unitPrice properties from the item object. The 
//itemName, quantity, and the product of unitPrice and quantity (rounded 
//to two decimal places) are logged to the console using another template 
//literal. The total variable is updated by adding the product of unitPrice 
//and quantity to it. I printOrder functions array order to get the outcome. 
