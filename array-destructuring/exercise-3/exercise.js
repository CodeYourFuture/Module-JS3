let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let { quantity, itemName, unitPrice } = order;

function itemList(item){
  const subtitleItems = ["QTY", "ITEM", "TOTAL"];
  item.forEach(order => {
    const totalOrder = (order.quantity * order.unitPrice).toFixed(2);
    subtitleItems.push(`${order.quantity}\t${order.itemName}\t${totalOrder}`);
  });
  
  return subtitleItems.join('\n')
}
console.log(itemList(order));


function totalPrice(num) {
  const total =  num.reduce((accumulator, currentValue) => accumulator + currentValue.unitPrice * currentValue.quantity, 0);
  return `total: ${total}`

}
 console.log(totalPrice(order));

