"Let, const and var"

## Introduction and Mindset

- The video starts by emphasizing the importance of learning JavaScript for real-world product-building, not just for learning syntax or getting a job.
- Goal-setting is recommended (e.g., plan to build an e-commerce or social media site) to make your programming journey purpose-driven.

***

## Variables and Constants in JavaScript

### What Are Variables and Constants?
- **Variables:** Used to store information that can be changed later.
- **Constants (`const`):** Used to store values that should not be changed once assigned.

### Syntax
- **Declare a constant:**  
  ```js
  const accountId = 144553;
  ```
- **Declare a variable with `let`:**
  ```js
  let accountEmail = "example@email.com";
  ```
- **(Old) Declare a variable with `var`:**
  ```js
  var accountPassword = "12345";
  ```
- **Naming conventions:** Use readable variable names. Modern practice prefers camelCase (e.g., accountId).

***

## Why NOT Use `var`

- `var` has function scope, not block scope, which can lead to bugs if the same variable name is used inside different code blocks.
- Example:
  ```js
  {
    var example = "hello";
  }
  console.log(example); // Works, but shouldn't if it was block-scoped!
  ```
- Modern JavaScript avoids `var` because it can unintentionally overwrite values or leak variables outside their intended scope.

### Scoping in JavaScript
- **Block scope:** Variables declared with `let` or `const` only exist within the `{ ... }` block they're defined.
- **Function scope:** Variables declared with `var` are accessible throughout the function, regardless of block boundaries.
- Prefer `let` and `const` for safer, predictable scoping.

***

## Constants (`const`)
- Values assigned to `const` cannot be reassigned.
- Use `const` for values you don’t want to change, e.g., API endpoints, configuration settings.
- Example:  
  ```js
  const siteURL = "https://example.com";
  // siteURL = "..."  // Not allowed, throws error
  ```

***

## Good Practices

- Use `const` by default, unless you know the value needs to change, then use `let`.
- Never use `var` in modern code.
- Variables can be declared without assignment (e.g., `let accountState;`), and will default to `undefined`.

***

## Practical Console Examples

- Use `console.log(variable)` to output values.
- Use `console.table([var1, var2, ...])` to print multiple variables in a tabular format for easier debugging.
- Try changing variable values and printing them to understand mutability and scoping.

***

## Comments

- Single-line: `// comment`
- Multi-line:  
  ```js
  /* 
    Multi-line
    comment
  */
  ```

***

## Summary

- The video encourages hands-on investigation and experimentation in the console for truly understanding JavaScript variables, scope, and mutability.
- The recommendation: Use `let` and `const`, avoid `var`, and build things with a practical, product-oriented mindset, rather than just focusing on syntax.