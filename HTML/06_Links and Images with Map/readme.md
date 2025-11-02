<!-- Picture Element/Tag -->
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture

<!-- image map genarator -->

"Links and Images with Map"

## Anchor Tags (`<a>`) and Their Uses
- Anchor tags are used to create hyperlinks in HTML.
- Essential attributes:
  - `href`: The link’s destination (must include full URL, e.g., `https://` for external sites).
  - `target`: Determines where the link opens. Common values:
    - `_blank`: Opens in a new tab.
    - `_self`, `_parent`, `_top`: Used with frames, less relevant today but good to know for older codebases.
- Special anchor uses:
  - Telephone links: `href="tel:+911234567890"` triggers a phone call on mobile.
  - Email links: `href="mailto:someone@example.com"` opens the default mail client.
- Always use `https://` or complete syntax; writing just `google.com` will not work.
- Anchor tags can navigate within a page using `href="#section-id"` and matching element with `id="section-id"`.

## Navigating Within the Same Page
- Use IDs with anchor tags to scroll to sections within a page.
  ```html
  <a href="#section2">Go to Section 2</a>
  <p id="section2">This is Section 2</p>
  ```
- Useful for long pages and creating table-of-contents functionality.

## Image Tag (`<img>`)
- The basic way to add images:  
  ```html
  <img src="url_or_path" alt="description">
  ```
- **Attributes:**
  - `src`: Path/URL of the image.
  - `alt`: Alternative text for accessibility and fallback.
  - `width` and `height`: Set image dimensions. Only width is often set to maintain aspect ratio.
- For local images, use relative or absolute paths (`./`, `../`, etc.).
- File naming best practices:
  - Avoid spaces. Use underscores or single words.
  - Ensures compatibility on servers and with different browsers.

## Sourcing Free Images
- Copyright applies to most web images.
- Use sites like Unsplash and Pexels for free, commercial-use images.
- Always consider licensing, and give credit if required or possible.

## The `<picture>` Tag and Responsive Images
- `<picture>` provides advanced control for serving different images depending on device/screen size.
  - Contains one or more `<source>` elements and a fallback `<img>`.
  - Example usage:
    ```html
    <picture>
      <source srcset="image-large.png" media="(min-width: 650px)">
      <source srcset="image-small.png" media="(max-width: 649px)">
      <img src="image-default.png" alt="Default">
    </picture>
    ```
- The browser loads the first source whose media condition matches, improving loading and display for all users/devices.

## Image Paths
- Relative path: `src="./images/myimage.png"` (from current folder).
- Absolute path: `src="https://example.com/image.png"`.
- Avoid using spaces in file names to prevent server problems.

## Image Maps (Clickable Areas on Images)
- Image maps make parts of an image clickable, directing users to different links or triggering different actions.
- Created with:
  - `<map>` element: Contains one or more `<area>` elements, each defining a clickable region (rectangle/circle/polygon).
  - The `usemap` attribute of the `<img>` tag connects the image to its map.
  - Example:
    ```html
    <img src="plan.png" usemap="#image-map">
    <map name="image-map">
      <area shape="rect" coords="34,44,270,350" href="section1.html" alt="Section 1">
      <area shape="circle" coords="340,210,45" href="section2.html" alt="Section 2">
    </map>
    ```
- Helpful for interactive diagrams and infographics.

## Practical Tools and Workflow
- Use an image map generator for easier creation of coordinates and shapes.
- Practice loading images from local or external sources.
- Keep image optimization and file naming in mind for website performance and maintainability.

## Javascript Interaction with Images (Demonstration)
- Demonstrated basic use of JavaScript functions triggered by clicking mapped image areas (e.g., showing an alert/message).
- Introduces `<script>` tags and basic JavaScript in the context of image interaction.
- This lays the foundation for future dynamic web applications.

These notes cover anchors, linking strategies, advanced image handling, responsive design with the `<picture>` tag, use of image maps, best practices, and a practical introduction to handling images in HTML and combining them with JavaScript.