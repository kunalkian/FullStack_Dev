<!-- iframe- -->
https://vimeo.com/blog/post/how-to-embed-videos
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe

"Class ID and iframe"

## Classes and IDs in HTML

### What are Classes and IDs?
- **Classes** and **IDs** are global attributes used to identify and style elements in HTML.
- Both help in targeting elements via CSS and JavaScript but have different conventions and use cases.

### Key Differences and Usage
- **Class**
  - Can be assigned to multiple elements on the same page.
  - Declared using the `class` attribute, e.g., `<p class="red">`.
  - In CSS, selected with a dot (`.red { ... }`).
  - Used for grouping similar elements or applying the same style repeatedly.
- **ID**
  - Must be unique for each element within a page.
  - Declared using the `id` attribute, e.g., `<p id="green">`.
  - In CSS, selected with a hash (`#green { ... }`).
  - Used to target a single, unique element (such as for page anchors or specific actions).
  - Browsers are forgiving even if you duplicate IDs, but best practice is to keep IDs unique for reliability.

### Practical Examples
- Assigning classes and IDs and viewing their effect by changing background colors using CSS.
- In modern frameworks (React, Angular), classes may be auto-generated or uniquely assigned for component tracking and state management.
- Inspecting real-world sites (like LinkedIn) shows classes and IDs generated for UI interaction and internal logic.

### Market Best Practices
- Classes: Used repeatedly for any elements that share style or function.
- IDs: Used only once per element/page for hooks, unique referencing, or JavaScript manipulation.
- Modern JS frameworks often move towards class auto-generation for easier style management and tracking.



## Iframe in HTML

### What is an `<iframe>`?
- The `<iframe>` tag embeds another webpage, website, or online content (like YouTube videos, Google Maps, external widgets) inside your web page.
- Useful for integrating third-party resources directly in your site.

### Iframe Structure and Use
- Syntax example:
  ```html
  <iframe src="https://www.example.com" width="560" height="315" frameborder="0" allowfullscreen></iframe>
  ```
- Common attributes:
  - `src`: Link to the resource you want to embed.
  - `width` and `height`: Control display size.
  - `allowfullscreen`: Allows full-screen mode for supported content (such as videos).
  - `sandbox`: Adds security restrictions for embedded content (recommended when embedding untrusted pages).

### Embedding Videos and Other Content
- For YouTube: Use "Embed" option to get the correct `iframe` code and note that the embed URL is different from the regular watch URL.
- For other sources (like Vimeo): Use their provided embed code as well.
- Some platforms auto-generate unique IDs for traceability and interaction.

### Security Considerations
- Use `sandbox`, `allow`, and other attributes to limit what embedded content can do—important for user safety.
- Iframes can be exploited if not used carefully