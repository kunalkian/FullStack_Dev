"Formatting style and Global attributes"

### HTML Comments
- Comments in HTML are added for documenting code and making it understandable for others or for future reference.
- The syntax for a comment is `<!-- comment here -->`.
- To comment/uncomment quickly in VSCode, use the shortcut `Ctrl + /` (or `Cmd + /` on Mac); this works for both single and multiple selected lines.
- Comments remain visible in the page source, even if invisible on the page, so avoid putting sensitive information in them.

### Formatting Text with Tags
- The `<b>` tag makes text bold, but modern practice is to use it only for stylistic bolding without semantic meaning.
- The `<strong>` tag is used to semantically emphasize and make content bold, indicating importance—search engines and assistive technologies recognize this emphasis.
- The `<i>` tag italicizes text for style, while `<em>` provides semantic emphasis through italics.
- Practice using VSCode’s multi-cursor/shortcut features for faster editing and duplication.

### More Formatting Tags
- `<small>` makes text smaller.
- `<sub>` and `<sup>` create subscript and superscript text respectively (e.g., h₂O, e=mc²).
- `<del>` is for deleted (strikethrough) text, while `<mark>` highlights text (useful for marking sales/discounts or for note-taking).
- For all tags, consult documentation for available attributes and latest usage—deprecated tags/attributes should generally be avoided.

### Inline Styling with the `style` Attribute
- The `style` attribute allows you to apply inline CSS directly to any HTML element.
- Multiple properties are separated by semicolons:  
  Example:  
  `<h3 style="text-align: center; background-color: green;">Centered green heading</h3>`.
- Use inline styles for learning and quick demos, but for larger sites prefer external or internal CSS for maintainability.

### Global Attributes in HTML
- Some attributes are available for almost all HTML tags—these are “global attributes”.
- Examples include:
  - `title`: Shows a tooltip on hover.
  - `style`: Inline CSS styling.
  - `class`, `id`: Used for selecting and styling elements.
  - `contenteditable`, `spellcheck`, `tabindex`, `translate`, and more.
- Global attributes enhance flexibility and accessibility. Always check documentation for the full and current list and best practices.

### Importance of Documentation
- The video repeatedly stresses the importance of reading official documentation (like MDN) to learn about tag features, attributes, and current standards.
- Developing a habit of referring to documentation, especially for global attributes, helps in building expert-level understanding and following best practices.

These notes summarize the best practices, usage of formatting tags, working with comments and global attributes, and emphasize strengthening habits around reading HTML documentation for deeper learning.