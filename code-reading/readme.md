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

Created variable inside the function exist only inside. So its not applaing as a global variable and not conflict with previus x 

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

The output would be 10 and error
Because f1 function performs only one ection, console.log the x variable

But second console.log can't access to variable y, because it's not global, it could be access only inside the function.

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
```
The output here will be 9
Yes we evoking the function but we not going to see anythong in console, and if so we goint to see error that val was already declared as a parameter


```js
const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

The property of y was dynamiclly reassign to 10. So when we console.log y after evoking the function we going to have 10 if before evoking it's will be 9.