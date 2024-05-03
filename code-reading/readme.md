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

My answer: 
Line 4 creates a new local variable x inside the function f1, which shadows the outer variable x. So, when console.log(x) executes on line 5, it refers to the local x with a value of 2. Line 7 refers to the outer variable x, which retains its original value of 1.
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
 The code output: 

10 
undefined

# Explain for my answer : 
console.log(x) inside f1() prints the value of the outer variable x, which is 10. y is defined locally within f1(), so it's not accessible outside the function, resulting in undefined.


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

answer Q3 
 THE OUTPUT :

9
{ x: 10 }

MY EXPLAIN 
In the first case, x is a primitive (number), so passing it to f1() doesn't change its value. In the second case, y is an object, and since objects are passed by reference, modifying val.x inside f2() affects the original object y.


What will be the output of this code. Explain your answer in 50 words or less.
