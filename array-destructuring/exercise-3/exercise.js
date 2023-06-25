let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
console.log("QTY    ITEM            TOTAL")
let total = 0;
order.forEach(element => {
  
  let individualOrder = element;
  let { itemName,quantity,unitPrice } = individualOrder;
  total = total + unitPrice;
 console.log(`${quantity}`  ,  `     ${itemName}`,       `      ${unitPrice}`)
})
console.log(`Total:${total}`)