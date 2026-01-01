"Array in Javascript:

## What is an Array?

- An array in JavaScript is a special object used to store ordered collections of multiple values.
- Arrays can hold elements of any type—numbers, strings, booleans, objects, even other arrays (nested arrays).
- Arrays are zero-indexed: the first element is at index `0`.

***

## Declaring Arrays

- You can declare an array using square brackets:
  ```js
  const myArray = [0, 1, 2, 3, 4, 5];
  ```
- Elements can be of mixed types:
  ```js
  const mixed = [1, "Hi", true, {name: "Hitesh"}, [5, 6]];
  ```

***

## Accessing Elements

- Access elements by index:
  ```js
  console.log(myArray[0]); // 0
  ```
- If you access an index that doesn’t exist, JavaScript returns `undefined`.

***

## Mutability and Reference

- Arrays in JavaScript are mutable: you can change, add, or remove elements.
- Arrays are reference types; copying an array (using `=`) does not create a new array, but a new reference to the same data.
- Changing one reference will affect the other unless you create a copy.

***

## Array Methods: Adding and Removing

- `push(value)`: Adds value(s) to the end.
- `pop()`: Removes the last element.
- `unshift(value)`: Adds value(s) at the beginning (can slow down large arrays).
- `shift()`: Removes the first element.

***

## Array Methods: Query and Search

- `includes(value)`: Checks if value is present.
- `indexOf(value)`: Returns the index (or -1 if not found).
  - If not found, returns `-1`.

***

## Array Conversion

- `join(separator)`: Converts array elements into a string, joined with the specified separator.
  ```js
  let arr = [1, 2, 3];
  let joined = arr.join("-"); // "1-2-3"
  ```

***

## Array Slicing and Splicing

- `slice(start, end)`: Returns a new array, shallow-copied from start (inclusive) to end (exclusive). Original array is not changed.
  ```js
  let arr2 = arr.slice(1, 3); // [2, 3]
  ```
- `splice(start, deleteCount, ...items)`: Changes the original array, can add/remove at specified index.
  - Useful for inserting/removing items at any position in the array.

***

## Example: Difference between `slice` and `splice`

- `slice` does not modify the original array; it only returns a new shallow copy.
- `splice` modifies (mutates) the original array.

***

## Array Length and Properties

- `.length`: Returns the number of elements.
  ```js
  console.log(arr.length);
  ```

***

## Iterating Arrays

- Basic loop over array:
  ```js
  for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
  }
  ```

- You can also use for...of, forEach, map, etc.

***

## Interview and Practical Tips

- Arrays are fundamental for handling collections in JavaScript.
- Know the difference between shallow and deep copy: basic assignment copies reference; to make a real copy, use methods like `slice()`, `concat()` or spread `[...arr]`.
- `splice` and `slice` differences are popular interview questions.
- Arrays are dynamic; you can add or remove elements at any time.

***

These notes cover what JavaScript arrays are, how to use them, key methods, and common behaviors you should understand for both practical coding and interviews.