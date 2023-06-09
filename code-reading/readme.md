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
  Everything that we console.log in a function gets the outcome of the function , the first let at line 1 is global so line 7 beign outside the function will console log global

## Question 2

Take a look at the following code:

```js
let x = 10; // outside funtion serves as global scope
console.log(y);
function f1() {
  console.log(x);  // this will be 10 because console.log didn't find any local scope inside function it looks at global scope
  let y = 20;
}

console.log(f1());// gives as the function console.log as no. 10.
console.log(y);// will not work because y is declared in the block scope of the function
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
console.log(x);// the log will be = to 10 

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;    // this is {x=10} because it takes the obj y:x value and increments it by 1 as shown on the upper line
}

f2(y); // same as comment on line 57
console.log(y); //same
```

What will be the output of this code. Explain your answer in 50 words or less.
