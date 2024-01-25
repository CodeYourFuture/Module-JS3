let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let total=0;

function printReceipt(arr){

  console.log("QTY   ITEM           TOTAL");
  console.log('');

  arr.forEach(element => {
    let {itemName, quantity, unitPrice} = element;

    let gap=20- itemName.length ;

    console.log(quantity + '      ' + itemName + " ".repeat(gap) + unitPrice);
    total += unitPrice;
  });
  console.log('');
  console.log(`TOTAL: ${total}`);


}


printReceipt(order)



