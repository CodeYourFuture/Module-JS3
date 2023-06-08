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

Answer: Because line 4 is a block scoop/ local variable, so javascript first looks for the current scoop variable not to the global variables.
In line 6 executes the global variable which value is 1.

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
 Answer:
 1-  10 // line 30 executes the global variable.
 2-  function f1(){
  console.log(x);
  let y = 4;
  }  // Line 34 executes function f1().
  3-  20 // line 35 executes local variable .

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

Answer:
1-  Since x is a global variable, so x passed to f1() and remains unchanged.
2- Inside f2(), val.x refers to the property x of the object passed as val, which is { x: 9 }. The line val.x = val.x + 1; increments the value of x by 1, resulting in { x: 10 }.

After f2(y) is called, the value of y is printed using console.log(y), which outputs { x: 10 } since the object referenced by y has been modified within f2().




 