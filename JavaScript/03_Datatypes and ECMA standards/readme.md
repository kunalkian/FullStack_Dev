"Datatypes and ECMA standards"


## JavaScript Datatypes and ECMA Standards

### Mindset for Learning
- The video encourages learning coding by **coding and practicing directly** on your keyboard, not just by writing notes on paper.
- Real understanding comes from active experimentation and trying examples, not passive copying.[1]

***

## ECMAScript, Standards, and "use strict"

- **JavaScript** has evolved: Old code may lack features like classes or arrow functions, but the standard (ECMAScript/ECMA) keeps the language modern and forward-compatible.
- `"use strict"`—a directive to enforce stricter parsing and error handling in your code:
  - Makes code behave according to the latest JS standard.
  - Most modern runtimes now default to strict mode, but the statement still appears in tutorials and guides.
- No equivalent `"use no strict"`—once you use strict, it applies until the end of the file.
- **ECMAScript/TC39**: The body that defines and maintains JavaScript standards.
  - MDN is great for documentation, but always remember ECMA (tc39.es/ecma262) is the *specification* source.[1]

***

## The Importance of Readability & Coding Environment

- Console methods: `console.log`, `console.table` are your friends for quick experimentation and debugging.
- JS can run in a browser or with Node.js. Some features (like `alert`) only work in the browser, not Node.
- **Code readability** and proper formatting (with extensions like Prettier) are crucial for maintainability and sharing.

***

## JavaScript Data Types

### Primitive Types

1. **Number**
   - All numeric values, limited by a range (about $$2^{53}$$).
   - For very large values, JavaScript provides BigInt, though it's rare in typical use.
2. **String**
   - Textual data, e.g., `"Hitesh"`.
3. **Boolean**
   - Only `true` or `false`.
   - Vital for logical decisions, user states, feature flags, etc.
4. **Null**
   - A special "empty" value, intentionally set. Represents absence of value.
   - Example use: If a temperature isn't available, set it as `null` (not 0).
5. **Undefined**
   - Variable declared without initialization has the value `undefined`.
   - Example: `let state; // undefined`
6. **Symbol**
   - Unique, immutable identifiers.
   - Used mainly in advanced scenarios (e.g., React components, unique property keys).

### Reference Type

7. **Object**
   - Most complex structures (arrays, functions, plain objects) are of type object.
   - Covered in much more detail in future videos.

***

## Type Checking & Special Behaviors

- Use `typeof variable` to check type in JS.
  - Example:
    ```js
    let name = "Hitesh";
    typeof name; // "string"
    let age = 18;
    typeof age; // "number"
    ```
- **Oddities**:
  - `typeof null` returns "object" (longstanding JavaScript quirk/interview Q).
  - `typeof undefined` correctly returns "undefined".

***

## Practical Notes and Assignments

- Try all primitive types by declaring and using them in your own code; observe behaviors with `console.log` and `typeof`.
- Recognize the distinction between `null` and `undefined`, both in use and in type-checking.
- BigInt: Used for gigantic integers; not common but important for specialized applications (e.g., finance, cryptography).
- Always refer to the ECMA standard and MDN documentation for edge cases and specification details.

***

## Summary

- JavaScript data types are simple: numbers, strings, booleans, null, undefined, symbol, and objects.
- Learn by coding, not by copying theory.
- Know and experiment with real JS docs—MDN for learners/practitioners, ECMA for language specifics.
- Remember "null" is a deliberate empty value, "undefined" is default absence, and "typeof null" is "object" due to a language bug.
- The main video message: practice, experiment, and build understanding through direct code play.