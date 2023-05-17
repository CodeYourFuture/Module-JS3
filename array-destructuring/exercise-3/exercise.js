let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function orderList(list){
  console.log(`QTY  ITEM           
     TOTAL`);

let totalNum = 0;
list.forEach(order => {
  const {itemName, quantity, unitPrice} = order;
  let total = (Math.round(quantity * unitPrice / 100) / 100).toFixed(2);
  console.log(`${quantity.tostring().padEnd(10)}${itemName.padEnd(20)}${total.padStart(7)}`);
  totalNum += Num(total);
});
console.log(`Total:${totalNum.toFixed(2)}`);
};
 
orderList(order);
