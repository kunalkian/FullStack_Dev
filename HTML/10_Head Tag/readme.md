<!-- Link Tag -->
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link

<!-- Viewport -->
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport

<!-- Base Tag -->
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/base

"Head Tag in HTML"

## Purpose of the `<head>` Tag

- The `<head>` section of an HTML document contains metadata and configuration information about the page, not content displayed to users.[1]
- **Metadata** includes page title, character encoding, keywords, description, links to stylesheets/scripts, viewport settings, and more.
- Browsers, search engines, and social platforms use this information for rendering, indexing, and sharing.

***

## Essential Elements within the `<head>`

### 1. Title Tag
- `<title>` sets the page title shown on browser tabs and in search engine results.
- Example:
  ```html
  <head>
    <title>My Webpage</title>
  </head>
  ```

### 2. Linking CSS Stylesheets
- Inline styles can be written within a `<style>` tag in the head or linked as an external file using `<link>`:
  ```html
  <link rel="stylesheet" href="./head.css">
  ```
- Use `rel` to set the relationship (usually `stylesheet`), and `href` for the file path.

### 3. Meta Tags
- **Charset (Character Encoding):**  
  ```html
  <meta charset="UTF-8">
  ```
  Supports various characters, emojis, and multilingual content; preferred value is `UTF-8` or `UTF-16` for more complete support.[1]
- **Keywords:**  
  ```html
  <meta name="keywords" content="HTML, tutorial, chai aur code">
  ```
  Keywords help search engines understand page topics.
- **Description:**  
  ```html
  <meta name="description" content="A complete guide to HTML head tag">
  ```
  Appears in search engine previews.

### 4. Viewport and Scaling for Responsive Design
- Meta tag for viewport configuration, which helps with responsiveness on different devices:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Controls page rendering on devices (phones, tablets) and prevents horizontal scroll for mobile users.

### 5. HTTP-Equiv for Auto-Refresh
- To auto-refresh a page at set intervals (rarely used today, usually replaced with JavaScript):
  ```html
  <meta http-equiv="refresh" content="30">
  ```

***

## Additional Points Covered

- **Best Practices:**  
  - Always use `<meta charset="UTF-8">` for character encoding to prevent rendering issues with special characters and emojis.
  - Use external CSS for maintainability; prefer `./style.css` syntax for current directory referencing.[1]
  - Inspect page responsiveness by testing with device emulators in browser dev tools.

- **Common Head Mistakes:**  
  - Using `meta charset="utf-8"` vs. `utf-16`: UTF-8 suffices for most use cases, but UTF-16 required for certain scripts/emojis.
  - Omitting the viewport tag causes poor mobile display—content may overflow or require unnecessary scrolling.

- **Script Tag:**  
  - JavaScript can be linked or placed in the head to control page behavior.
  - In most cases, scripts are placed at the end of the body for faster page load but can be put in the head for early execution.

- **Base Tag:**  
  - `<base href="...">` sets a base URL for all relative URLs in the document—for advanced use, like working with directory structures.
  - Assignment: Practice by reading about the base tag and its practical applications on MDN.[1]

***

## How to Practice and Learn More
- Experiment by adding/removing head meta tags and observing their effect in different devices/emulators.
- Get comfortable reading and editing head content, as it's crucial for web development, SEO, and accessibility.
- Always check documentation for the latest best practices.


These notes cover all significant concepts, examples, and best practices for using the HTML `<head>` tag effectively, as explained in the video.