"Number and Maths in Javascript"

## Numbers in JavaScript

- Numbers are a core primitive type in JavaScript.
- You can declare numbers directly:
  ```js
  let score = 400;
  ```
- JavaScript automatically assigns the number type, but you can also explicitly create a number using the Number constructor:
  ```js
  let balance = new Number(100);
  ```
- Number primitives and Number objects behave almost identically for most practical purposes, but the object variant exposes additional methods and properties.

***

## Number Methods and Properties

- Common methods:
  - `.toString()`: Converts the number to a string.
  - `.toFixed(n)`: Formats the number with `n` fixed decimal places. Useful for currency and display.
  - `.toPrecision(n)`: Formats the number to `n` significant digits.
  - `.toLocaleString(locale)`: Converts the number to a string with locale-specific formatting, e.g., inserting commas.
- Example:
  ```js
  let num = 1234567.89;
  num.toLocaleString("en-IN"); // "12,34,567.89" in Indian numbering system
  ```

- Important numeric constants:
  - `Number.MAX_VALUE`, `Number.MIN_VALUE`: Maximum/minimum numeric values.
  - `Number.MAX_SAFE_INTEGER`, `Number.MIN_SAFE_INTEGER`: Maximum/minimum safe integers for accurate calculations.
  - `Number.EPSILON`: Smallest difference between numbers JavaScript can recognize.

***

## Practical Details

- Conversion from number to string enables access to string properties, like `.length` (for the number of digits).
- Converting a number to a string:
  ```js
  let str = num.toString(); // Now, str.length is the digit count as a string.
  ```
- `.toFixed(2)` is crucial for showing prices, taxes, or calculations up to two decimals.

***

## Math Object and Methods

- `Math` is a built-in object providing mathematical operations.
- Common and useful methods:
  - `Math.abs(x)`: Returns the absolute value of `x`.
  - `Math.round(x)`: Rounds `x` to nearest integer.
  - `Math.ceil(x)`: Rounds `x` up to next integer.
  - `Math.floor(x)`: Rounds `x` down to previous integer.
  - `Math.sqrt(x)`: Square root of `x`.
  - `Math.pow(x, y)`: `x` raised to the power `y`.
  - `Math.min(a, b, ...)` and `Math.max(a, b, ...)`: Smallest/largest from arguments.
  - `Math.random()`: Generates a pseudo-random number between 0 (inclusive) and 1 (exclusive).

***

## Math.random() and Generating Ranges

- To get a random integer in a specific range:
  - Standard formula:
    ```js
    Math.floor(Math.random() * (max - min + 1)) + min;
    ```
  - This always returns an integer from `min` to `max` (inclusive) and is widely used for dice, games, random item selection, etc.

***

## Application and Best Practices

- Use `.toFixed()` for financial calculations/visuals.
- Use `.toLocaleString()` for user interfaces showing numbers to users.
- Avoid floating-point comparison bugs; consider using `.toPrecision()` or `.toFixed()` if needing precision.
- Math methods are essential for DSA, simulations, and any numeric computational logic.

***

These notes cover the practical approaches and essential methods for handling numbers and performing mathematical operations in modern JavaScript, as well as some productivity tips and best practices.