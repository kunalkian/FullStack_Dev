"JavaScript data types":

## JavaScript Data Types Overview
JavaScript data types are categorized into two main groups:
1. Primitive Data Types
2. Reference (Non-Primitive) Data Types

Understanding these is fundamental for coding, debugging, and interviews.

***

## Primitive Data Types
- **Definition:** Stored directly in the memory stack. Immutable and copied by value.
- **Types and Characteristics:**
  - **String:** Sequence of characters, e.g., `"hello"`.
  - **Number:** Numeric values, including integers and floating-point numbers, e.g., `42`, `3.14`.
  - **BigInt:** Used for very large integers beyond the Number range.
  - **Boolean:** Logical values, either `true` or `false`.
  - **Null:** Represents intentional absence of any object value. Not zero or empty string; means completely empty.
  - **Undefined:** A declared variable without assigned value.
  - **Symbol:** Unique and immutable identifier, useful for unique keys in objects and advanced scenarios like ensuring uniqueness in components.
  
**Key Behaviors:**
- Passed by value: copying a primitive variable creates an independent copy. 
- Example:
  ```javascript
  let a = 5;
  let b = a;
  b = 10;
  // a is still 5
  ```

***

## Reference (Non-Primitive) Data Types
- **Definition:** Stored in the heap; variables hold references (memory addresses) to objects in the heap.
- **Include:**
  - Objects (collections of key-value pairs)
  - Arrays (specialized objects for ordered collections)
  - Functions (callable objects with executable code)
  
**Characteristics:**
- Passed by reference: copying just copies the reference, not the object itself.
- Changes via one reference reflect in all references pointing to the same object.
- Example:
  ```javascript
  let obj1 = {name: "Alice"};
  let obj2 = obj1;
  obj2.name = "Bob";
  // obj1.name is also "Bob"
  ```

***

## Objects and Functions
- Objects are defined using curly braces `{}` with properties:
  ```javascript
  let person = { name: "John", age: 30 };
  ```
- Functions are treated as first-class objects and can be assigned to variables, passed as arguments, or returned from other functions:
  ```javascript
  let greet = function() { console.log("Hello"); };
  ```
- Functions return a special function object type in JavaScript.

***

## Memory and Behavior Differences
- Primitive values reside in the stack and are immutable.
- Reference values reside in the heap, and variables refer to their memory address.
- Understanding this helps avoid unexpected side effects when manipulating objects or arrays.

***

## Type Checking
- Use the `typeof` operator to get the data type:
  - For primitives: returns `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"symbol"`, `"bigint"`
  - For objects: returns `"object"`
  - Special cases:
    - `typeof null` returns `"object"` due to legacy reasons.
    - Functions return `"function"`

***

## Additional Notes
- JavaScript is dynamically typed, so variables can hold values of any type without declaring in advance.
- Static typing (like in TypeScript) adds type safety by explicit type declarations but is not native to JavaScript.
- Symbols are useful for creating unique values when multiple components or libraries interact.
- BigInt is useful for financial, cryptographic, or other numeric computations requiring very large integers.

***

These notes encapsulate the video content and additional information for a clear understanding of JavaScript data types, suitable for interviews and development.