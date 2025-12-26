"Immediately Invoked Function Expressions IIFE"

## What is IIFE?

**IIFE** (Immediately Invoked Function Expression) executes a function **immediately** upon definition, creating its own isolated scope.

**Two main purposes**:
1. **Avoid global scope pollution**
2. **Execute code immediately** (e.g., database connections)

***

## Basic IIFE Syntax

### Method 1: Named Function + Parentheses
```js
function chai() {
  console.log("DB CONNECT");
}
chai();  // Manual call
```

**IIFE version** (wrap in parentheses):
```js
(function chai() {
  console.log("DB CONNECT");
})();  // Executes immediately
```

### Method 2: Anonymous Function
```js
(function() {
  console.log("DB CONNECT");
})();
```

**Parentheses trick**: `(function(){})()` - First `()` makes it an expression, second `()` executes it.

***

## Why Use IIFE?

### 1. **Global Scope Protection**
```js
// Without IIFE - pollutes global scope
var globalVar = "polluted";

// With IIFE - isolated scope
(function() {
  var privateVar = "safe";  // Not accessible globally
})();
console.log(typeof privateVar);  // undefined ✅
```

### 2. **Immediate Execution**
```js
// Database connection on app start
(function() {
  console.log("DB CONNECTED");
})();
```

***

## Arrow Function IIFE

```js
(() => {
  console.log("Arrow IIFE");
})();
```

**With parameters**:
```js
((name) => {
  console.log(`DB CONNECT ${name}`);
})("hitesh");  // "DB CONNECT hitesh"
```

***

## Named vs Anonymous IIFE

| Type | Syntax | Use Case |
|------|--------|----------|
| **Named** | `(function chai(){})()` | Debugging (stack traces show name) |
| **Anonymous** | `(function(){})()` | Simple, lightweight |

***

## Common Pitfalls & Fixes

### 1. **Semicolon Issues**
```js
// ❌ Error - parser confusion
[1,2,3].forEach(console.log);
(function(){ console.log("IIFE") })();

// ✅ Fix - explicit semicolon
[1,2,3].forEach(console.log);
;(function(){ console.log("IIFE") })();
```

### 2. **Multiple IIFEs**
```js
(function(){ console.log("First"); })();
(function(){ console.log("Second"); })();  // ✅ Works
```

***

## Practical Examples

### Module Pattern (Pre-ES6 Modules)
```js
const myModule = (function() {
  let privateVar = 0;
  
  return {
    increment: () => ++privateVar,
    getCount: () => privateVar
  };
})();

myModule.increment();
console.log(myModule.getCount());  // 1
```

### Initialization
```js
(function initApp() {
  // Database connection
  // Event listeners
  // Initial state
  console.log("App initialized");
})();
```

***

## Interview Points

**Don't just say**: "Executes immediately"
**Say**: 
1. "Creates isolated scope to prevent global pollution"
2. "Executes code immediately without manual invocation"
3. "Used for module patterns and initialization"

***

## Syntax Summary

```js
// 4 valid IIFE patterns
(function(){})();
(() => {})();
(function named(){})();
((name) => {})(arg);
```

**Key Rule**: Wrap function in `()` then call with `()`.

Essential for legacy codebases, avoiding global pollution, and understanding module patterns before ES6 import/export.