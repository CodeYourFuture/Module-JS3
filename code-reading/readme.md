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
In line-4, x=2 is declared into function(function scope),so clg in line-5,
will return 2 ,and this x will not be define in out of function.
clg in line-7 will return 1 as x=1 in line-1 is a global scope.

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
clg in line 30 will return 10(x is global scope).
clg in line-34 will return undefined ,because f1 func has no return.
clg in line-35 will return y is not defined, because is defined in func scope
 and we can use it out of function.

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
clg in line-55 will return 9, because before that we use x as a parameter in f1 func 
but we dont have any changes in x_variable'values(remain unchanged).
clg in line-65 will return {x:10} as after passing y object to f2 func,
the property's value is changed.

