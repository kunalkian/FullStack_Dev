Control flow in JavaScript governs how code executes conditionally or repeatedly, covering if-else statements, switch cases, and truthy/falsy values. This video from Chai aur Code provides a comprehensive Hindi explanation with live coding examples. Detailed notes below are structured by key concepts for exam preparation and practical use.

## Basic If Statement
- Uses `if (condition)` syntax followed by curly braces `{}` for a block scope.
- Condition evaluates to true (enters block) or false (skips block); outer code always executes.[1]
- Comparison operators: `==` (loose equality), `===` (strict equality with type check), `!=`, `!==`, `>`, `<`, `>=`, `<=`.[1]
- Example: `if (userLoggedIn === true) { console.log("Access granted"); }` – strict check prevents type coercion issues.[1]

## If-Else and Nesting
- `else` executes only if `if` condition is false; mutually exclusive blocks.[1]
- Nesting: Multiple `if-else` chains for range checks, e.g., balance tiers: `<500`, `<750`, `<1200`, else high balance.[1]
- Logical operators: `&&` (AND – both true), `||` (OR – either true), e.g., `if (userLoggedIn && debitCard) { allowShopping(); }` [1].
- Short-hand: Single-line without `{}` (implicit scope), but avoid multi-lines without braces for readability.[1]

## Switch Statement
- Ideal for multiple exact matches on one value: `switch (month) { case 1: console.log("January"); break; ... default: ... }`.[1]
- `case` matches strictly; `break` exits to prevent fall-through (all subsequent code runs without it).[1]
- `default` handles unmatched cases, like final `else`.[1]
- Supports strings/numbers: `case "march":` works exactly.[1]

## Truthy and Falsy Values
- Falsy (evaluate as false): `false`, `0`, `-0`, `""` (empty string), `null`, `undefined`, `NaN`.[1]
- Truthy (all others): Non-empty strings (`"hello"`, `"0"`, `" "`), non-zero numbers, arrays/objects/functions even if empty.[1]
- Direct condition check: `if (userEmail) { ... }` – truthy if non-empty/non-null.[1]
- Array/Object empty checks: `if (userEmails.length === 0)` or `if (Object.keys(userObj).length === 0)`.[1]

## Best Practices
- Use `let/const` inside blocks to respect scope; variables don't leak outside `{}`.[1]
- Avoid implicit multi-line scopes or comma-separated lines – use explicit blocks.[1]
- Prefer `===/!==` for strictness; understand type coercion in `==` (e.g., `"2" == 2` is true).[1]
- Real-world: Login checks combine `&&`/`||` for user auth, payments