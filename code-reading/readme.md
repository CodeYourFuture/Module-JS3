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

Line 4 uses function's value and line 6 uses global variable

## Question 2

Take a look at the following code:

```js
let x = 10;

function f1() {
  console.log(x);
  let y = 20;
}

console.log(f1());
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

y is not defined outside the function and the function does not return this value, so the output will be "10" and an error

## Question 3

Take a look at the following code:

```js
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x); //9 as variable is const its value can't be changed

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y); // {x: 10}
console.log(y); //{x: 10}  in spite of the object is declared with const, values of its properties can be changed
```

What will be the output of this code. Explain your answer in 50 words or less.
