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
line 4 outputs 2 because it references the local variable x within the scope of the f1() function, while line 6 outputs 1 because it references the global variable x. 
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
The first console.log() within the function f1() prints the value of x (x= 10). y is declared within the function's scope and cannot be accessed outside of it, resulting in a ReferenceError when trying to print y outside the function.
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
The first console.log() prints 10 the value of x and does not consider the f1() function. The second console.log() prints { x: 10 } which is the modified object y where the x property is incremented by 1 within the f2() function.