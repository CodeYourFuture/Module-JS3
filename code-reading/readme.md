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
//answer
The reason why line 4 and line 6 output different numbers is due to variable scoping. The variable x declared inside the function f1 is a local variable, which means that it is only accessible within the function's scope. When console.log(x) is executed on line 5, it is referencing the local variable x with a value of 2. 

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

//answer

When console.log(f1()) is executed on line 33,it should be :
10
because the x variable defined in global scope and we can access to x in different function 


When console.log(y) is executed on line 34,it should be:
undefined
because the y variable  defined in function as local variable and we can't access this y variable out of the function. 
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

//answer:

When f1(x) is executed on line 62,it should be :
10

When console.log(x) is executed on line 63,it should be :
9

When f2(y) is executed on line 71,it should be :
{x:10}

When console.log(y) is executed on line 72,it should be :
{x:10}
