"Objects in depth in javascript":

## Object Declaration Methods

- **Object Literals** (most common): Uses curly braces `{}`.
- **Constructor Method**: `Object.create()` or `new Object()` - creates **singletons** (unique instances).
- Literal syntax is preferred for performance and simplicity (not singletons).

```js
// Literal syntax (recommended)
const jsUser = {
    name: "Hitesh",
    email: "hitesh@gmail.com"
};

// Constructor method (singleton)
const user = Object.create({});
```

***

## Object Properties and Access

- Objects store **key-value pairs** where keys can be custom names (not just numbers like arrays).
- **Two ways to access properties**:
  - **Dot notation** (preferred): `jsUser.name`
  - **Bracket notation**: `jsUser["name"]` (required for special cases)

### When to use Bracket Notation:
```js
const jsUser = {
    "full name": "Hitesh Choudhary"  // Space in key name
};

// Dot notation fails: jsUser.full name ❌
// Bracket notation works: jsUser["full name"] ✅
```

***

## Mixed Data Types in Objects

Objects can hold any data type as values:
```js
const jsUser = {
    name: "Hitesh",           // String
    age: 24,                  // Number
    isLoggedIn: false,        // Boolean
    lastLoginDays: ["Monday", "Saturday"],  // Array
    anotherObj: {}            // Nested object
};
```

***

## Symbols as Object Keys

- **Symbols** are unique primitive values used as object keys.
- Always accessed with **bracket notation** only.

```js
const mySym = Symbol("key1");
const jsUser = {
    [mySym]: "mykey1"  // Computed property with Symbol
};

console.log(jsUser[mySym]);  // Works ✅
console.log(jsUser.mySym);   // undefined ❌ (treated as string)
```

**Interview Tip**: Symbols help avoid key name collisions.

***

## Modifying Object Properties

- **Change values**: Direct assignment
```js
jsUser.email = "hitesh@chatgpt.com";  // ✅ Updates value
```

- **Freeze objects** (make immutable):
```js
Object.freeze(jsUser);  // Prevents changes
jsUser.email = "new@email.com";  // No error, but change ignored
```

***

## Functions as Object Methods

Functions inside objects are called **methods** and are **first-class citizens**.

```js
const jsUser = {
    name: "Hitesh",
    email: "hitesh@gmail.com",
    greeting: function() {
        console.log("Hello JS User");
    },
    greeting2: function() {
        console.log(`Hello ${this.name}`);  // 'this' refers to current object
    }
};

// Call methods
jsUser.greeting();     // Function reference (logs function)
jsUser.greeting();()   // Executes function
jsUser.greeting2();    // Uses 'this.name' → "Hello Hitesh"
```

**Key Point**: `jsUser.greeting` gives **function reference**, `jsUser.greeting()` **executes** it.

***

## Important Concepts

### Reference vs Execution
```js
console.log(jsUser.greeting);   // [Function: greeting] (reference)
console.log(jsUser.greeting()); // "Hello JS User" (execution)
```

### 'this' Keyword
- Refers to the **current object** the method belongs to.
- Essential for dynamic property access within methods.

***

## Best Practices Summary

| Operation | Dot Notation | Bracket Notation |
|-----------|-------------|-----------------|
| Simple keys | `obj.name` ✅ | `obj["name"]` ✅ |
| Keys with spaces | ❌ | `obj["full name"]` ✅ |
| Symbols | ❌ | `obj[mySymbol]` ✅ |
| Variable keys | ❌ | `obj[keyVar]` ✅ |

- Prefer **dot notation** for simple cases.
- Use **bracket notation** for dynamic keys, symbols, or special characters.
- Always **freeze** objects when immutability is needed.
- Use **`this`** for self-referencing in methods.

***

These notes cover object fundamentals, access patterns, symbols, methods with `this`, freezing, and interview-level details for mastering JavaScript objects.