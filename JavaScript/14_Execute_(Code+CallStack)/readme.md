Here are **detailed study notes** from the video "How does javascript execute code + call stack | chai aur #javascript" (index 26) - **Essential for interviews and deep JS understanding**:

***

## 🎯 Core Concepts Covered

1. **Execution Context** - How JS creates execution environment
2. **Memory Creation Phase** vs **Execution Phase** 
3. **Call Stack** - LIFO execution order
4. **Single Threaded Nature** of JavaScript

***

## 1. Execution Context (EC)

**Definition**: Environment where code executes, containing variables, scope chain, and `this` binding.

### Types of Execution Contexts
```
1. Global EC (always first)    → this = window (browser)
2. Function EC (per function call)
3. Eval EC (rarely used)
```

**Global EC is ALWAYS created first** - regardless of code size/complexity.

***

## 2. Two-Phase Execution Process

Every EC goes through **2 phases**:

### Phase 1: **Memory Creation Phase** (aka Creation Phase)
```
✅ Variables declared → undefined
✅ Functions → Full definition stored  
❌ No line-by-line execution
❌ No calculations performed
```

### Phase 2: **Execution Phase** 
```
✅ Line-by-line execution
✅ Variable assignments
✅ Calculations performed
✅ Function calls → New EC created
```

***

## 3. Detailed Code Walkthrough

**Sample Code**:
```js
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 10);
```

### **Step-by-Step Execution**:

#### **Global EC - Memory Creation Phase**:
```
Variable Object:
val1     → undefined
val2     → undefined  
addNum   → [Function Definition]
result1  → undefined
result2  → undefined
```

#### **Global EC - Execution Phase**:
```
Line 1: val1 = 10
Line 2: val2 = 5
Line 7: result1 = addNum(10, 5) → Creates NEW Function EC
```

#### **Function EC (addNum) - Memory Creation**:
```
NEW Variable Environment:
num1  → undefined
num2  → undefined  
total → undefined
```

#### **Function EC (addNum) - Execution**:
```
num1 = 10
num2 = 5
total = 15
return 15 → Back to Global EC
result1 = 15
FUNCTION EC DESTROYED ✅
```

**Process repeats for `result2`**.

***

## 4. Call Stack (LIFO - Last In, First Out)

```
Call Stack Structure:
┌─────────────────┐  
│ Function EC 3   │← Top (Current)
├─────────────────┤
│ Function EC 2   │  
├─────────────────┤
│ Function EC 1   │
├─────────────────┤
│   Global EC     │← Bottom (Always last)
└─────────────────┘
```

### **Nested Function Example**:
```js
function one() {
  console.log("1");
  function two() {
    console.log("2");
    function three() {
      console.log("3");
    }
    three();
  }
  two();
}
one();
```

**Call Stack Evolution**:

1. Global EC
2. Global → one()
3. Global → one() → two()
4. Global → one() → two() → three()  ← Peak
5. three() finishes → Pop
6. two() finishes → Pop  
7. one() finishes → Pop
8. Global EC empty

**Output**: `1 2 3` (LIFO order)

***

## 5. Browser DevTools Visualization

### **How to Debug Call Stack**:

1. Right-click → Inspect → Sources tab
2. Create new snippet: "chai-code.js"
3. Add breakpoints (F9 or click line number)
4. Step through: F10 (step over), F11 (step into), Shift+F11 (step out)
5. Watch "Call Stack" panel → Shows live execution

**Pro Tip**: **Always Ctrl+S after writing code** before debugging.

***

## 6. Memory Management

✅ Function completes → EC destroyed
✅ Variables garbage collected
✅ Memory freed for reuse

**Global EC survives until page closes/refresh**.

***

## 7. Interview Questions Covered

| Question                       | Answer                                       |
| ------------------------------ | -------------------------------------------- |
| How does JS execute code?      | 2 phases per EC: Memory Creation → Execution |
| What happens in Memory Phase?  | Variables=undefined, Functions=definitions   |
| Call Stack order?              | LIFO - Last function called finishes first   |
| Browser vs Node Global Object? | window vs global                             |
| Why single threaded?           | One execution thread, async via event loop   |

---

## 8. Key Takeaways for Exams/Interviews

🔥 MEMORIZE THIS SEQUENCE:
1. Global EC created (always)
2. Memory Creation Phase (hoisting)
3. Execution Phase (line-by-line)
4. Function call → New EC pushed to stack
5. Function returns → EC popped from stack
6. Repeat for each function call

***

## 9. Debugging Checklist

✅ Ctrl+S before debugging
✅ Sources → Snippets → chai-code.js
✅ F9 = Breakpoint
✅ F10 = Step Over
✅ F11 = Step Into  
✅ Shift+F11 = Step Out
✅ Watch "Call Stack" panel

***

## 🎓 Study Commands

1. **Draw this diagram daily**:
   Global EC → Function ECs (stack)
   
2. **Practice in DevTools**:
   Write nested functions → Debug step-by-step
   
3. **Memorize LIFO**:
   Last function pushed = First to finish
   
4. **Understand destruction**:
   Function ends → EC destroyed → Memory freed

**Master these concepts → 80% of JS interviews cracked**. Next: Event Loop, Async patterns.