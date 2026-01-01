For loops in JavaScript enable repeating code blocks for iterations like printing numbers or processing arrays, with `break` and `continue` keywords for control. This Chai aur Code video (24:31 duration) demonstrates practical examples in Hindi, emphasizing real-world use over patterns. Structured notes below follow the video's flow for exam prep and coding practice.

## For Loop Basics
- Syntax: `for (let index = 0; index < 10; index++) { console.log(index); }` – initializes variable, checks condition, increments at end.
- Execution flow: Declaration once → condition check (loop if true) → body executes → increment → repeat check; skips if false.
- Variable scope: `let index` inside loop stays block-scoped; inaccessible outside, preventing leaks.
- Prints 0-9; change `< 10` to `<= 10` for 0-10.

## Array Iteration
- Basic: `const arr = []; for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }` – accesses elements by index.
- Define array first to avoid errors: `const arr = [1,2,3];` then loop prints elements.
- Conditionals inside: `if (arr[i] === 5) { console.log("5 detected"); }` – checks per iteration.
- Use `i` or `index` interchangeably; comment-out (Ctrl+/ ) for quick edits.

## Nested Loops
- Outer: `for (let i = 0; i < 10; i++) { console.log(`Outer: ${i}`); }`.
- Inner: Inside outer body, `for (let j = 0; j < 10; j++) { console.log(`Inner: ${j}`); }` – inner resets per outer iteration.
- Flow: Outer i=0 → inner j=0-9 (10x) → i increments → repeat; prints 100 lines.
- Practical: Multiplication tables, e.g., `${i} * ${j} = ${i*j}` prints all tables 0-9 at once; start from 1 by setting `i=1`.

## Array-Specific For Loop
- `const heroes = ["flash", "batman", "superman"]; for (let i = 0; i < heroes.length; i++) { console.log(heroes[i]); }`.
- `heroes.length` is 3 (indices 0,1,2); use `< length` (not `<=`) to avoid `undefined`.
- No out-of-bounds exception in JS, but `undefined` signals error; increment (`i++`) essential or infinite loop.

## Break Keyword
- Exits entire loop early: In 1-20 loop, `if (i === 5) { console.log("5 detected"); break; }` prints 1-5 then stops.
- Like switch cases: Jumps to end of loop block, skips remaining iterations.
- Use: Stop on condition (e.g., found item in large dataset).

## Continue Keyword
- Skips current iteration, proceeds to next: Same 1-20 loop with `continue` prints 1-4, skips 5, prints 6-20.
- Ignores code after `continue` in that iteration (e.g., skips print on 5) but loop continues.
- Difference: `break` ends loop; `continue` forgives one iteration.