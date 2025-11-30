"Objects in Javascript part 2":

## Continuing Object Concepts in JavaScript

- Objects in JavaScript can be declared as:
  - Empty objects: `{}` or `Object.create({})`
  - Literal objects with properties inside curly braces `{ key: value }`
- There is no internal difference between creating an empty object using `{}` or `Object.create({})` in terms of the object output; only singleton behavior differentiates them in complex use cases (singletons vs non-singletons).

***

## Nested Objects

- Objects can contain nested objects to represent complex data structures.
- Example of deep nesting:
  ```js
  const user = {
      fullName: {
          firstName: "Hitesh",
          lastName: "Choudhary"
      },
      email: "hitesh@example.com"
  };
  ```
- Access nested properties using chained dot notation:
  ```js
  user.fullName.firstName // "Hitesh"
  ```
- Optional chaining (`?.`) can be used to safely access nested properties that might be missing:
  ```js
  user.fullName?.middleName  // undefined without error if middleName doesn't exist
  ```

***

## Combining Objects

- Similar to arrays, objects can be combined or merged.
- Simply creating an object that contains two objects as values nests objects rather than merging properties.
- Use `Object.assign(target, ...sources)` to merge properties into one target object.
- Another way is using the spread operator (`...`) to merge objects into a new object:
  ```js
  const obj3 = { ...obj1, ...obj2 };
  ```

***

## Arrays of Objects

- Often data from APIs or databases arrives as an array of objects, for example:
  ```js
  const users = [
      { id: 1, email: "user1@example.com" },
      { id: 2, email: "user2@example.com" }
  ];
  ```
- Access elements in the array then access object properties:
  ```js
  users[0].email  // "user1@example.com"
  ```
- Looping and mapping such arrays is a common use case in JavaScript applications.

***

## Object Utilities and Methods

- Useful methods to work with object keys and values:
  - `Object.keys(obj)` returns an array of keys.
  - `Object.values(obj)` returns an array of values.
  - `Object.entries(obj)` returns an array of `[key, value]` pairs.
- These are often used to loop through objects or access data dynamically.

***

## Checking Property Existence

- Use `obj.hasOwnProperty(property)` to check whether an object has a specific key/property.
- This avoids errors when checking or accessing possibly undefined properties.

***

These notes summarize advanced object manipulation techniques in JavaScript, including deep nesting, merging, arrays of objects, and utility methods for real-world coding and interviews.