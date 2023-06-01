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
//The X which is in line4 is in the function then the console.log will print 2 
BUT
//The X in line one is a global scope then we will get 1 as the return.

Explain why line 4 and line 6 output different numbers.

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
// for line 30 we will get "10" (global scope)
//for line 34 we will get "undefined" as f1 does not return
//for line 35 we will get "not defined" error as y defined just in the function not in global scope
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
//for line 55 we will receive "9" as we put X for f1 function as the parameter
//for line 65 we will receive "{x:10}" because X will change after running the second function