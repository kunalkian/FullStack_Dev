📘 JavaScript String Prototype – Detailed Notes + Examples

What is `String.prototype`?

All string values in JavaScript inherit built-in methods from `String.prototype`, which allow manipulation, searching, transforming, and formatting of strings.

🔹 1️⃣ Accessing Characters

### `at(index)`

Returns the character at the given index. Supports **negative indexing**.

```js
let text = "Hello";
console.log(text.at(1));   // "e"
console.log(text.at(-1));  // "o"  (last character)
```

---

### `charAt(index)`

Returns the character at specified index. **Does not support negative index.**

```js
let name = "John";
console.log(name.charAt(2)); // "h"
```

---

### `charCodeAt(index)`

Returns **UTF-16 numeric code** of character.

```js
console.log("A".charCodeAt(0)); // 65
```

---

### `codePointAt(index)`

Returns full **Unicode code point**, useful for emojis.

```js
console.log("😎".codePointAt(0)); // 128526
```

---

## 🔹 2️⃣ Searching & Checking

### `includes(substring)`

Checks if a string **contains** a value → returns `true`/`false`.

```js
console.log("JavaScript".includes("Script")); // true
```

---

### `indexOf(substring)`**

Returns first index where substring occurs, else `-1`.

```js
"banana".indexOf("na"); // 2
```

---

### `lastIndexOf(substring)`

Returns **last** occurrence index.

```js
"banana".lastIndexOf("na"); // 4
```

---

### `startsWith(value)` / `endsWith(value)`

```js
"hello.js".startsWith("hell"); // true
"notes.pdf".endsWith(".pdf"); // true
```

---

### `search(regex)`

Matches using regex and returns index.

```js
"hello123".search(/\d/); // 5
```

---

## 🔹 3️⃣ Extracting & Slicing

### `slice(start, end)`

Supports negative indexes.

```js
let str = "JavaScript";
console.log(str.slice(0,4)); // "Java"
console.log(str.slice(-6)); // "Script"
```

---

### `substring(start, end)`

Same as slice **but no negative values allowed**.

```js
"JavaScript".substring(4,10); // "Script"
```

---

### `substr(start, length)`

⚠ Deprecated — avoid in new code.

```js
"JavaScript".substr(4, 6); // "Script"
```

---

## 🔹 4️⃣ Modifying & Formatting

### `toUpperCase()` / `toLowerCase()`

```js
"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"
```

---

### `trim()`, `trimStart()`, `trimEnd()`

```js
"   hi  ".trim();      // "hi"
"   hi".trimStart();   // "hi"
"hi   ".trimEnd();     // "hi"
```

---

### `padStart(len, char)` / `padEnd(len, char)`

```js
"5".padStart(3,"0"); // "005"
"5".padEnd(3,"0");   // "500"
```

---

### `repeat(n)`

```js
"ha".repeat(3); // "hahaha"
```

---

### `replace(old,new)` / `replaceAll(old,new)`

```js
"hello world".replace("world","JS"); // "hello JS"
"ha ha ha".replaceAll("ha","ho");     // "ho ho ho"
```

---

## 🔹 5️⃣ Joining & Converting

### `concat(str1, str2, …)`

```js
"Hello".concat(" ", "World"); // "Hello World"
```

### `split(separator)`

```js
"red,blue,green".split(","); // ["red","blue","green"]
```

### `toString()` and `valueOf()`

Both return primitive string value.

```js
let a = new String("Hello");
console.log(a.toString()); // "Hello"
console.log(a.valueOf()); // "Hello"
```

---

## 🔹 6️⃣ Unicode & Normalization

### `normalize()`

```js
let x = "\u00F1"; // ñ
console.log(x.normalize("NFC"));
```

### `isWellFormed() / toWellFormed()`

Avoids unpaired surrogates for Unicode.

---

## 🔹 7️⃣ Regex Operations

### `match(regex)`

```js
"test123".match(/\d/g); // ["1","2","3"]
```

### `matchAll(regex)`

```js
const result = [..."a1b2c3".matchAll(/\d/g)];
console.log(result.map(m => m[0])); // ["1","2","3"]
```

---

## 🔸 Deprecated HTML Formatting Methods

⚠ Not recommended (old browser era)

| Method              | Output Example                    |
| ------------------- | --------------------------------- |
| `bold()`            | `"Hello".bold()` ⇒ `<b>Hello</b>` |
| `italic()`          | `<i>Hello</i>`                    |
| `fontcolor("red")`  | `<font color="red">Hello</font>`  |
| `blink()`           | `<blink>Hello</blink>`            |
| `big()` / `small()` | Changes font size                 |
| `link(url)`         | `<a href="url">Hello</a>`         |
| `sub()` / `sup()`   | Adds subscript/superscript        |

---

## ⭐ Example – Real-World Combination

```js
let input = "   jAVaScRiPt Developer  ";

// Clean
input = input.trim();

// Standardize case
input = input.toLowerCase();

// Title Case
input = input.replace(/\b\w/g, char => char.toUpperCase());

console.log(input); // "Javascript Developer"