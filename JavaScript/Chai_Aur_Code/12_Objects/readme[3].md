"Object de-structure and JSON API intro":

## Object Destructuring

- Destructuring is a syntax to extract values from objects into distinct variables.
- Instead of accessing properties repeatedly (e.g., `obj.prop1`, `obj.prop2`), destructuring provides a cleaner way.

### Basic Syntax:
```js
const course = {
  courseName: "Jas in Hindi",
  price: 999,
  instructor: "Hitesh"
};

// Destructuring to extract properties
const { courseName, instructor } = course;

console.log(courseName); // "Jas in Hindi"
console.log(instructor); // "Hitesh"
```

- You can optionally rename variables while destructuring:
```js
const { instructor: teacher } = course;
```

- Destructuring helps keep code clean, especially when accessing multiple properties repeatedly.

***

## Use Case in React and Beyond

- In frameworks like React, destructuring is very common to extract props or state variables.
- Instead of repeatedly writing `props.name`, often destructuring is used for convenience.

***

## JSON and API Introduction

- JSON (JavaScript Object Notation) is a lightweight data interchange format similar to JavaScript objects but used for data transport.
- JSON consists of:
  - Key-value pairs where keys are strings.
  - Values can be string, number, boolean, array, object, or null.
- Example JSON snippet:
```json
{
  "name": "Hitesh",
  "course": "Jas in Hindi",
  "price": "999"
}
```
- JSON keys and string values must be double-quoted; JavaScript objects use quotes only if keys are complex.

***

## Fetching Data from APIs

- APIs commonly return data in JSON format.
- Example: GitHub users API returns an array of user objects.
- The returned data can be parsed and used as JavaScript objects/arrays.

***

## Tools to Understand JSON

- Online JSON formatters and viewers help understand and debug JSON data.
- These tools format JSON into readable hierarchical tree structures.

***

## Handling API Data

- API data structures often contain arrays of objects.
- You can loop over arrays and access nested object properties easily once data is parsed.
- This skill of working with JSON responses is crucial for interacting with REST APIs.

***

These notes explain how to destructure objects efficiently in JavaScript, understand JSON structure, and handle API data for web development use cases.

Weebsites or tools-
//randomuser me api
//json formatter