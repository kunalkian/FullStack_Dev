<!-- Block and Inline Elements- -->
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow

"List, inline and Block element"

## Types of Lists in HTML

### Main Types of Lists
- **There are three primary types of lists in HTML:**
  1. **Unordered List (`<ul>`)**
     - Most commonly used (90-95% of cases).
     - Uses bullet points for list items.
  2. **Ordered List (`<ol>`)**
     - Uses numbers or letters for list items.
     - Order matters for these items.
  3. **Description List (`<dl>`)**
     - Pairs terms with their descriptions.

### Unordered List Example
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
- You can multiply the number of items as needed.
- List style (like circles, squares, etc.) can be changed using CSS’s `list-style-type` property, but default styles are most common.[1]

### Ordered List Example
```html
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
```
- Supports customization with the `type` attribute (`1`, `a`, `A`, `i`, `I`).
- CSS can also be used to hide or restyle default numbering.

### Nested Lists
- Lists (ordered or unordered) can be nested within each other for complex structures.
- Common in navigation menus, sidebars, and hierarchical content.

### Description List Example
```html
<dl>
  <dt>Coffee</dt>
  <dd>Hot beverage</dd>
  <dt>Tea</dt>
  <dd>Also a hot beverage</dd>
</dl>
```
- Each `<dt>` is a term; `<dd>` is its description.
- Less commonly used, but important for data like glossaries or FAQs.[1]

***

## Inline vs Block Elements

### Block Elements
- Block-level elements take up the full width available and start on a new line.
- Examples: `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>`, `<table>`
- Visually, block elements extend the entire row in the page layout.
- You can check this by using browser inspector: block elements highlight the full horizontal space.[1]

### Inline Elements
- Inline elements only take as much width as needed and do not force a new line.
- Examples: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`
- These fit inside block elements and do not break the flow of content.
- Highlighted in the inspector only around their direct content, not full width.

***

## Practical Tips and Usage

- Lists are widely used for navigation bars, menus, footers, and any places with repeated, related items.
- CSS can be heavily used to style lists, bullets, numbers, or convert lists into navigation elements.
- Block elements are typically used for structuring the layout, while inline elements are for small chunks that fit within other elements.
- Use browser developer tools (Inspect Element) to visually understand the difference between block and inline elements.
- No need to memorize every block/inline element—practice and inspection reveal their behavior naturally.


These notes summarize all key topics in the video, from types of HTML lists to understanding and visually identifying block and inline elements, with best practices for both learning and web development use.