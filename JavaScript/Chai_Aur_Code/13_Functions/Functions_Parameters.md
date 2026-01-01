"Functions and parameter in javascript":

## Introduction to Functions

- Functions are reusable blocks of code that can be defined once and executed multiple times throughout your program.
- They help reduce code repetition and organize logic into manageable units.

***

## Function Definition Syntax

- Basic syntax:
  ```js
  function functionName() {
    // function body
  }
  ```
- Example:
  ```js
  function greet() {
    console.log("Hello");
  }
  ```
- To execute a function, use parentheses:
  ```js
  greet(); // Calls the function and outputs "Hello"
  ```

- Just referencing a function without parentheses gives the function definition, not execution.

***

## Functions with Parameters and Arguments

- Parameters are variables defined in the function signature to receive input.
- Arguments are the actual values passed to the function when invoked.

Example function that adds two numbers:
```js
function add(num1, num2) {
  return num1 + num2;
}
```
Calling the function:
```js
let result = add(3, 4);  // Returns 7
```

***

## Return Statement

- A function can use `return` to give back a value.
- Once `return` executes, remaining code inside the function is not run (unreachable code).
- Without `return`, functions return `undefined` by default.

***

## Handling Data Types in Functions

- JavaScript is dynamically typed, so parameters can be of any type.
- If arguments passed are strings instead of numbers, concatenation happens instead of addition.
- It's good to validate or convert data types inside functions if needed.

***

## Default Parameters

- Functions can have default values for parameters if no argument or `undefined` is passed.
```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```
If called as `greet()`, output is `Hello, Guest`.

***

## Checking for Arguments

- If a parameter is optional, often check if it is `undefined` before using it.
- Use conditional checks to handle missing or invalid inputs gracefully.

***

## Important JavaScript Concepts in Functions

- Function execution and reference distinction.
- Passing correct data types matters.
- Use `return` for useful outputs.
- Default parameters simplify optional inputs.
- Defensive code by checking for undefined arguments.

***

## Practical Example

```js
function loginUser(username = "Guest") {
  if (username === undefined) {
    console.log("Please enter user name");
    return;
  }

  console.log(`Hello, ${username}`);
}

loginUser("Hitesh");   // Hello, Hitesh
loginUser();           // Hello, Guest
loginUser(undefined);  // Please enter user name
```

***

These notes cover function basics, parameters, arguments, return statements, default params, and common best practices for JavaScript coding and interviews.