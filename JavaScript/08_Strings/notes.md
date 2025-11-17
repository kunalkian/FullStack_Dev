"Strings in JavaScript"

### Strings in JavaScript

- Strings in JavaScript can be declared using either single quotes `'...'` or double quotes `"..."`. Both work the same way and can be used interchangeably.
- Concatenation of strings is done using the `+` operator, e.g., `"Hello " + "World"` results in `"Hello World"`.
- Modern JavaScript prefers **template literals** (backticks `` `...` ``) for string interpolation, allowing embedding variables directly using `${variable}` syntax. This is cleaner and more flexible than concatenation.
- Example:
  ```js
  let name = "Hitesh";
  console.log(`Hello, my name is ${name}`);
  ```
- Strings have a `length` property that returns the number of characters in the string.[1]
- Strings are immutable; operations like changing a character do not modify the original string but create a new one.
- To access characters at a specific position, use bracket notation with index starting at 0, e.g., `str[0]` gives the first character.[1]
- Useful string methods:
  - `toLowerCase()`, `toUpperCase()` for case conversion.
  - `slice(start, end)` to extract a substring. Negative values in `slice` start counting from the end.
  - `indexOf(char)` finds the position of a character or substring.
  - `trim()` removes whitespace from both ends of the string.
  - `replace(searchValue, newValue)` replaces occurrences in the string.
  - `includes(substring)` checks if a substring exists within the string.
  - `split(separator)` splits a string into an array based on the separator.
- Strings can be created as primitives or by using the `String` constructor, e.g., `new String("text")`, but primitive string literals are more common and preferred.
- String methods like `toUpperCase()` and `replace()` do not modify the original string; they return a new string.
- Using template literals improves code readability and flexibility especially when combining multiple variables or expressions.

***

These notes capture the essentials of working with strings in JavaScript as presented in the video, focusing on declaration, interpolation, common methods, and behavior.