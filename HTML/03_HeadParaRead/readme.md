"Heading, paragraph and reading docs"

### Introduction to HTML Elements, Tags, and Attributes
- HTML elements consist of a start tag, content, and an end tag, for example, `<h1>Heading 1</h1>` is an element with the tag name `h1`.
- Tags are names that mark the start and end of elements, and attributes are additional properties that modify these elements, such as `title` or `href`.
- An element includes everything from the opening tag to the closing tag, including the content inside it.

### Importance of Closing Tags and Syntax
- Always close tags properly to avoid issues, especially important when using frameworks like React.
- HTML is case-insensitive, but lowercase is preferred as a best practice for consistency and readability.
- Nesting of tags is common, where one element can contain others, e.g., a `<span>` inside an `<h2>` for more control over parts of the heading.

### Attributes in HTML
- Attributes add extra information or functionality to elements. For example, the `<a>` (anchor) tag’s `href` attribute specifies the URL to link to.
- Some attributes are mandatory or essential for the element to work as intended, like `href` for anchor tags.
- The `target` attribute in anchor tags controls where the link opens (`_self`, `_blank`, `_parent`, `_top`), with `_blank` opening the link in a new tab.
- Attributes like `download`, `ping`, and `referrerpolicy` provide further control and behavior customization of links.

### Working with Anchor Tags (`<a>`)
- Anchor tags create hyperlinks to other web pages or different parts of the same page.
- For the anchor tag to work properly, `href` must be populated with a valid URL or a fragment identifier.
- If anchor tags lack a proper `href`, they won’t behave as links in browsers.

### Using VSCode Features
- Demonstrates using VSCode shortcuts like duplicating lines or multi-cursor editing to speed up coding.
- Encourages frequent use of documentation (like MDN or Mozilla Developer Network) to understand the full capabilities and attributes of tags.

### Headings and Paragraphs
- Discusses the `<h1>` through `<h6>` tags defining heading levels, with `<h1>` being the highest level and most important heading on the page.
- The video notes that excessively deep heading levels (like `<h5>`, `<h6>`) are rarely needed and might indicate the content could be split into multiple pages.
- Paragraphs are created using the `<p>` tag and can hold blocks of text.
- The video mentions line breaks (`<br>`) and horizontal rules (`<hr>`) for formatting text content, noting their proper use in HTML and later in frameworks like React.

### Special Tags for Text Formatting
- Introduces the `<pre>` tag, which preserves whitespace and formatting, useful for displaying code or poems as written.
- Notes that `<pre>` has some deprecated attributes and advises checking current browser support and documentation.

### Emphasis on Reading Documentation
- Stresses the importance of reading official documentation and developer resources to deepen understanding beyond tutorials.
- Knowing how to navigate and use documentation is crucial to becoming a proficient developer.

These notes cover key aspects of HTML elements, attributes, and best practices for writing clean, semantic code using headings, paragraphs, and links, guiding beginners through efficient learning.

For '<a>' tag to know more refer this-
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a

For '<pre>' tag to know more refer this-
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre