let order = [
  { itemName: "Hot cakes", 
  quantity: 1, 
  unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function billPay() {
  console.log("QTY\t\tITEM\t\t\t\tTOTAL")
  let total = 0;
  
  order.forEach((item) => {
    let {itemName, quantity, unitPrice} = item;
    total += unitPrice * quantity;

    console.log(`${quantity}\t\t${itemName}\t\t\t\t${unitPrice}`);
  });

  console.log(`Total: ${total}`);
}

billPay();

/*
QTY		ITEM			  TOTAL
1		Hot cakes			  2.29
2		Apple Pie			  1.39
1		Egg McMuffin			  2.8
1		Sausage McMuffin			  3
2		Hot Coffee			  1
4		Hash Brown			  0.4
 Total: 14.47
*/
