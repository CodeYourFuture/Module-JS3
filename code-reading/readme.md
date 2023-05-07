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
//the output in line 5 is 2, which refers to tha local variable x inside the function.
// the output in line 7 is 1 which refers to the global x in the first line.

## Question 2

Take a look at the following code:

```js
let x = 10;

function f1() {
  console.log(x);
  let y = 20;
}

console.log(f1()); //10
console.log(y); //error
```

What will be the output of this code. Explain your answer in 50 words or less.
when f1() is called in line 33, it logs the value of x (which is 10) to the console, but y is defined within the function scope and cannot be accessed outside of it. Therefore, the second console.log()(line 34) will be undefined.
## Question 3

Take a look at the following code:

```js
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);// 9 - the function is called with x as a parameter, but the x variable will be same in the heap memory, so 9 will be logged to counsel. 

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y); 
```

What will be the output of this code. Explain your answer in 50 words or less.
