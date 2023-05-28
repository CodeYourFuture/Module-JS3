# Exercise

_Need some help? Refresh your memory with [this article](https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/)_

- In `exercise.js`, you have been provided with a takeout order. Write a program that will print out the receipt for this order.
- Log each individual item to the console.
- Log the total cost of the order to the console.

## Expected result

```
QTY     ITEM                TOTAL
1       Hot Cakes           2.29
2       Apple Pie           2.78
1       Egg McMuffin        2.80
1       Sausage McMuffin    3.00
2       Hot Coffee          2.00
4       Hash Brown          1.60

Total: 14.47

```

console.log("QTY\tITEM\t\t\tTOTAL");

Let totalCost = 0;

for(let i=0;i < order.length; i++) {
    let{itemName, quantity, unitPrice} = order[i];
    let total = quantity * unitPrice;
     totalCost += total; 

console.log(`${quantity}\t${itemName}\t\t${total.toFixed(2)}`);
}
console.log("\inTotal:", totalCost.toFixed(2));







<!-- console.log("Name\t\tAge\tCity");
console.log("John Doe\t25\tNew York");
console.log("Jane Smith\t32\tSan Francisco");
console.log("Mark Johnson\t41\tChicago");
When you run this code, it will output the following in the console:

css
Copy code
Name           Age   City
John Doe       25    New York
Jane Smith     32    San Francisco
Mark Johnson   41    Chicago
In this example, \t is used to separate the columns in the header line and align the subsequent data accordingly. The \t character ensures consistent spacing between the columns, resulting in a visually appealing and well-organized table-like format. -->
