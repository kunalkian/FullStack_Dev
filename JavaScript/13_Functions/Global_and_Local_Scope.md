 "Global and local scope in javascript"

## Scope Fundamentals

**Scope** defines where variables are accessible in your code. Variables have different visibility levels based on where they're declared.

***

## Variable Declarations and Scope Behavior

### `var` vs `let`/`const` Comparison:
```js
var a = 10;
let b = 20;
const c = 30;

console.log(a, b, c); // 10 20 30 - All accessible
```

**Problem with `var` inside blocks:**
```js
if (true) {
  var a = 10;   // Problem: leaks outside block
  let b = 20;   // Good: stays inside block
  const c = 30; // Good: stays inside block
}

console.log(a); // 10 (BAD - leaked outside!)
console.log(b); // ReferenceError (GOOD)
console.log(c); // ReferenceError (GOOD)
```

***

## Global vs Block Scope

| Scope Type | Accessibility | Example |
|------------|---------------|---------|
| **Global** | Everywhere in file | Variables outside `{}` blocks |
| **Block** | Only inside `{}` | Variables inside `if`, `function`, `for` loops |

**Key Rule**: Global variables are accessible inside blocks. Block variables **cannot** access global scope.

***

## Real-World Problems with `var`

```js
// Multiple developers working on same codebase
if (true) {
  var c = 30;  // Developer 1
}

c = 300;       // Developer 2 overrides without knowing
console.log(c); // 300 - Unexpected behavior!
```

**Solution with `let`:**
```js
if (true) {
  let c = 30;  // Stays contained
}
console.log(c); // ReferenceError - No conflict!
```

***

## Scope Independence Example

```js
let a = 10;  // Global scope

if (true) {
  let a = 300;  // Block scope (independent)
  console.log(a); // 300 (inner scope)
}

console.log(a); // 10 (global scope - unchanged)
```

**Multiple scope levels create independent "shadowed" variables.**

***

## Why Avoid `var`?

1. **Leaks outside blocks** → Unpredictable behavior
2. **Global pollution** → Conflicts in team environments
3. **Hard to debug** → Values change unexpectedly
4. **`let`/`const` are block-scoped** → Predictable and safe

***

## Nested Scopes Preview

```js
if (true) {
  function add(num1, num2) {  // Nested function scope
    let result = num1 + num2; // Local to function
    return result;
  }
}
```

Each `{}` pair creates a new scope level.

---

## Browser Scope Checking

- Open **DevTools** → **Console** → **Scope** tab
- Shows **Global**, **Local**, **Closure** scopes
- Node.js has different global object (`global` vs browser `window`)

***

## Key Takeaways

- Use **`let`/`const`** - Block-scoped and safe
- **`var`** - Function/global scoped, avoid it
- **Global scope** → Outside all blocks
- **Block scope** → Inside `{}` (if, function, loops)
- **Shadowing** → Inner scope variables hide outer ones

**Next**: Nested functions, closures, and practical debugging techniques.