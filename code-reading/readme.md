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

// x inside the function is local variable, x declared outside is a global variable

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


//The first console log outputs the value of x which is 10, then f1() returns undefined because it doesn't have a return statement, and the second console log throws a reference error because y is not defined outside of the function.


## Question 3

Take a look at the following code:

```js
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

9
{
  x: 10
}

The output in the console for this code will be 9 for the first console.log() statement and { x: 10 } for the second. This is because in the first function, the value of x is passed by value and remains unchanged, while in the second function, the object is passed by reference and the property value is modified.