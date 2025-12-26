"Functions with objects and array in javascript"

## Functions with Variable Number of Arguments (Rest Operator)

Functions can accept any number of arguments using the **rest operator** (`...`).

### Shopping Cart Example:
```js
function calculatePrice(...items) {
  return items;  // Returns all arguments as an array
}

console.log(calculatePrice(200, 400, 500));  // [200, 400, 500]
```

- `...items` collects all arguments into an **array**.
- Perfect for scenarios like shopping carts where you don't know how many items will be passed.

***

## Rest with Fixed + Variable Parameters

You can combine fixed parameters with rest parameters:
```js
function calculatePrice(product, ...items) {
  return items;  // Only rest parameters collected
}

console.log(calculatePrice("phone", 200, 400, 500));  // [400, 500]
```

- Fixed params (`product`) take first arguments.
- Rest (`...items`) collects remaining arguments.

---

## Functions with Objects

Pass entire objects as function parameters:

```js
const user = {
  username: "hitesh",
  price: 199
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);  // Direct object access
```

**Or pass object inline:**
```js
handleObject({ username: "sam", price: 399 });
```

**Important**: Always validate object properties exist to avoid `undefined` errors.

***

## Functions with Arrays

Pass arrays directly to functions:
```js
const myNewArray = [200, 400, 100, 600];

function getSecondValue(getArray) {
  return getArray[1];  // Access array index
}

console.log(getSecondValue(myNewArray));  // 400
```

**Or pass array inline:**
```js
getSecondValue([200, 400, 100, 600]);  // 400
```

***

## Key Takeaways

| Parameter Type | Example | Use Case |
|----------------|---------|----------|
| **Fixed** | `function add(a, b)` | Known number of inputs |
| **Rest (...)** | `function cart(...items)` | Unknown/variable inputs |
| **Object** | `function handle(obj)` | Complex data structures |
| **Array** | `function process(arr)` | Collections of data |

***

## Best Practices

1. **Descriptive function names**: `calculatePrice()` not `func1()`
2. **Type safety**: Check if object properties exist
3. **Rest for flexibility**: Handle variable arguments cleanly
4. **Return values**: Use `return` for reusable results
5. **Generic parameters**: Use `anyObject`, `getArray` for flexibility

***

These techniques are essential for real-world applications like e-commerce, API handling, and data processing where input count and structure varies. Next topics include scope and business logic implementation.