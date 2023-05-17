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
<!-- Line 4 and line 6 produce different outputs because they access different variables with the same name in different scopes.  -->

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

<!-- The code will output the value of x in the global scope, then undefined since f1() doesn't return anything, and finally, a ReferenceError because y is only defined within the scope of f1() -->

## Question 3

Take a look at the following code:

```js
const x = 9;

function f1(val) {
  val = val + 1;
  return val;   
} 

f1(x); nothing
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

<!-- The output will be 9 and {x: 10}. In the first function, x is a primitive type and is passed by value, so x remains unchanged. In the second function, y is an object and is passed by reference, so the value of y.x is changed to 10. -->