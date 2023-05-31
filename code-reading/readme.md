# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

BECAUSE IN  THE LINE 4 ,X HAS BEEN  REDECLARED  INSIDE THE FUNCTION AND THE CONSOLE.LOG IT'S GOING TO OUTPUT 2 , BUT IN THE LINE 7 THE X IS STILL THE SAME AS , THE VALUE 2 IS INSIDE THE FUNCTION AND DOES NOT THE EFFECT THE GLOBAL VARIABLE , THEREFOR THE CONSOLE.LOG IN LINE 7 IS GOING TO OUTPUT 1
FIRST X IS IN GLOBAL SCOPE , AND THE REDECLARED X IS IN LOCAL SCOPE OF THE FUNCTION

## Question 2

Take a look at the following code:

```js
let x = 10;

function f1() {
  console.log(x);// IT'S GOING TO OUTPUT 10
  let y = 20;
}

console.log(f1()); // IT'S GOING TO OUTPUT UNDEFINED AS NO RETURN STATEMENT IS PRESENT
console.log(y); //IT'S GOING TO THROW AN ERROR AR THE Y IS DECLARED IN THE LOCAL SCOPE OF THE FUNCTION AND IS NOT ACCESSABLE OUTSIDE OF IT
OUTPUT :
10 
UNDEFINED
```

What will be the output of this code. Explain your answer in 50 words or less.

## Question 3

Take a look at the following code:

```js
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x); // OUTPUT IS GOING TO BE 10 AS THE VALUE OF THE F1 IS NOT USED OR UPDATING THE CURRENT X VARIABLE 

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y); //HERE WE UPDATE THE VAL OF F2 WITH Y WHICH HAS AN OBJECT X:9  ,  IT GETS  INCREMENTED BY 1 AND RETURNS THE VALUE OF IT and since it's an object passed as argument the function receives a reference of the original object and any alternation made inside the function to that object will directly affect the object and reflect it .
console.log(y); // the out is going to be the object updated      { x: 10 };
```

What will be the output of this code. Explain your answer in 50 words or less.
