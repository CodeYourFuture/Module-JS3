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

=====>>> Line 4 declares a new variable x within function f1, creating a new local scope for that variable. Therefore, when console.log(x) is called on line 5, it refers to the local variable x, which has the value 2. Meanwhile, console.log(x) on line 7 refers to the global variable x, which has the value 1.


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

=======>>>>>> The code will throw an error on the console.log(y) line. This is because the variable y is declared inside the f1 function using let, which limits it to the scope of the function. Therefore, it is not accessible outside the function, resulting in an undefined reference error.

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

==== >> The first console.log(x) will print 9, as the variable x was not modified within the f1 function. The second console.log(y) will print {x: 10}, as the x property of object y was modified within the f2 function, increasing its value to 10.
