"Scope level and mini hoisting in javascript":

## Nested Scopes (Parent-Child Relationship)

Scopes form a **hierarchy** like family relationships - children can access parents, but not vice versa.

### Nested Function Example:
```js
function function1() {           // Parent scope (Level 1)
  let username = "hitesh";       // Accessible to children
  
  function function2() {         // Child scope (Level 2)
    let website = "youtube";     // Only accessible inside function2
    
    console.log(username);       // ✅ Works (parent access)
    // console.log(website);    // ❌ Error outside function2
  }
  
  function2();                   // Execute child
}

function1();                     // Hitesh (parent variable accessed)
```

**Rule**: Child scopes access parent variables. Parent **cannot** access child variables.

***

## Scope in Conditional Blocks

Same hierarchy applies to `if` statements:
```js
if (true) {
  let username = "hitesh";     // Outer scope
  
  if (username === "hitesh") {
    let website = "youtube";   // Inner scope
    
    console.log(username + " " + website);  // Works
  }
  
  // console.log(website);    // ❌ Error - scope ended
}

console.log(username);           // ❌ Error - outer scope ended
```

***

## Function Declaration vs Expression (Mini Hoisting)

**Two ways to declare functions** with different hoisting behavior:

### 1. Function Declaration (Hoisted):
```js
console.log(addOne(5));  // ✅ 6 (works before declaration)

function addOne(num) {
  return num + 1;
}
```

### 2. Function Expression (Not Hoisted):
```js
console.log(addTwo(5));  // ❌ Error: addTwo is not defined

const addTwo = function(num) {
  return num + 1;
}
```

***

## Hoisting Comparison Table

| Type | Before Declaration | Example |
|------|-------------------|---------|
| **Function Declaration** | ✅ Works | `function fn() {}` |
| **Function Expression** | ❌ Error | `const fn = function() {}` |
| **`var`** | ✅ `undefined` | `var x = 10;` |
| **`let`/`const`** | ❌ Error (Temporal Dead Zone) | `let x = 10;` |

***

## Closure Preview

**Child functions "remember" parent variables** even after parent execution:
```js
function parent() {
  let count = 0;
  
  function child() {           // Remembers `count`
    count++;
    console.log(count);
  }
  
  return child;                // Return child reference
}

const myFunc = parent();
myFunc(); // 1
myFunc(); // 2 (remembers count!)
```

***

## Key Scope Rules

1. **Child → Parent**: Always accessible
2. **Parent → Child**: Never accessible
3. **Scope ends at `}`**: Variables destroyed
4. **Nested `{}` = New scope**: Functions, `if`, loops
5. **Hoisting matters**: Declaration order affects access

***

## Debugging Tip

**Errors teach scope**:
```
ReferenceError: website is not defined
```
→ Variable declared in **child scope**, accessed in **parent scope**.

***

These concepts are crucial for understanding **closures**, **event handlers**, and **React state management**. Next: Full hoisting, execution context, and closure deep dive.