# Password verifier

Using TDD, write a function that checks a password follows the below series of rules.

## Before you start

- Try not to read ahead.
- Do one task at a time. The trick is to learn to work incrementally.
- Always write a test first, then make the test pass.

### Step 1

You will be writing tests and implementing some verifications inside a function called 'verify' that takes a password as an argument. If the conditions are met, the 'verify' function should return 'Password accepted', otherwise the 'verify' function should return 'Password rejected'.

- If the password is less than 8 characters, the 'verify' function should return 'Password rejected'.

### Step 2

- If the password is null, the 'verify' function should return 'Password rejected'. The requirements from step 1 remain the same.

### Step 3

- If the password does not have at least 1 uppercase letter, the 'verify' function should return 'Password rejected'. The requirements from steps 1 & 2 remain the same.

### Step 4

- If the password does not have at least 1 number, the 'verify' function should return 'Password rejected'. The requirements from steps 1, 2 & 3 remain the same.
