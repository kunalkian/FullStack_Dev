Here are detailed notes on JavaScript data types, presented as points for clarity and completeness:

### JavaScript Primitive Data Types
- Primitive types are the simplest building blocks of data in JavaScript.
- They are immutable, meaning once a value is created, it cannot be changed.
- The main primitive types are:
  - **String:** Represents textual data enclosed in quotes, e.g., `'Hello'`.
  - **Number:** Represents numeric values including integers and floating points, e.g., `42` or `3.14`.
  - **BigInt:** Represents very large integers beyond the range of Number.
  - **Boolean:** Represents logical values `true` or `false`.
  - **Null:** Represents the intentional absence of any object value (not zero or empty).
  - **Undefined:** Indicates a variable that has been declared but not assigned a value.
  - **Symbol:** Creates unique, immutable values often used as unique keys for object properties.
- When you assign or pass primitive types, the actual value is copied (call by value).
- Changing the copy does not affect the original variable.
- Examples:
  ```javascript
  let a = 10;
  let b = a; // b is 10, independent copy
  b = 20;    // a remains 10
  ```

### JavaScript Reference (Non-Primitive) Data Types
- Reference types store objects, arrays, and functions.
- Variables hold a reference (pointer) to the location where the actual data is stored in the heap memory.
- When you assign or pass these types, the reference is copied, not the object itself.
- Modifying the object via one reference affects all other references pointing to the same object.
- Objects are collections of key-value pairs enclosed in curly braces `{}`.
- Arrays are special types of objects used for ordered collections.
- Functions are also objects and treated as first-class citizens.
- Example:
  ```javascript
  let obj1 = { name: 'John' };
  let obj2 = obj1;
  obj2.name = 'Jane';  // obj1.name is also 'Jane'
  ```
  
### Type Checking
- Use the `typeof` operator to determine the data type.
- For primitives, it returns strings like `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"symbol"`, and `"bigint"`.
- For objects, it returns `"object"`.
- For functions, it returns `"function"`.
- Special cases:
  - `typeof null` returns `"object"` (a known JavaScript quirk).

### Other Important Points
- JavaScript is dynamically typed; variables are not bound to a single type.
- Null is intentionally assigned to indicate no value; undefined means not assigned yet.
- Primitive values are stored on the stack; objects are stored on the heap with references in the stack.
- Understanding the distinction helps avoid bugs related to unintended shared references or unexpected mutations.
- Symbols provide a way to create unique identifiers for object properties.
- BigInt is used to handle numeric values that exceed the safe integer limits of Number.

These notes give a thorough understanding of how JavaScript handles primitive and reference data types, their behavior in memory and assignment, and practical coding implications.