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

```
In line 4 the variable is local and the console in line 5 should print this 2 in console panel but because we didn't call the function in line 7 or 8 so this is why nothing occurs.

In line 6 there is only curly bracket.

In line 7 and outcome for console.log(x) = 1 because this line will print only the global variable which is in line 1
```

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

The outcome for this function is:

In line 39 console.log(f1()) will be 
= 10 coming from line 35 console.log(x) which is global variable in line 32.
and 
= undefined coming from calling function in line 39 f1() which is doesn't do anything.

finally 
In line 40 console.log(y) will be 
= uncaught error y is undefined because y is local variable which is console inline 40 can't read that variable. 

```

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

```
In function f1 we defined variable x = 9 then when we call this function and we did give x as parameter.
Then the functionality will add 1 to x from val = val + 1 then return val which is it x and it will come = 10
that what will happen in line 70 

In line 71 the outcome will be for the console = 9 because console will call only the global variable which is in line 63, not include it what happen in f1 because that is local.

In function f2 we defined variable as object y = { x: 9 } then when we call this function and we did give y as parameter.
hen the functionality will add 1 to the value of the key object like val.x = val.x + 1 then return val which is it x and it will come = 10 because is value of the object, that what will happen in line 80 


```
