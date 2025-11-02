<!-- address tag- -->
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address
<!-- cite tag- -->
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/cite

"Value of colors and CSS format"

## Introduction to Colors in HTML and CSS
- The video covers how colors are represented and used in HTML and CSS.
- Using colors effectively is important in web design and professional website development.
- Creating a separate file for different HTML lessons/files is recommended for easier revision.

## Ways to Define Colors in CSS
- There are three common ways to specify colors:
  1. **Hexadecimal (Hex) values:**  
     - Hex codes start with `#` followed by six hexadecimal digits (0-9, A-F).  
     - Example: `#414141` (a shade of grey).  
     - Hex values are preferred in professional environments because they are consistent across browsers.
  2. **RGB values:**  
     - Uses `rgb(red, green, blue)` format with values from 0 to 255.  
     - Controls red, green, and blue light intensity combined to form colors.  
     - Example: `rgb(65, 65, 65)` corresponds to the hex `#414141`.
  3. **HSL values:**  
     - Uses `hsl(hue, saturation, lightness)` format.  
     - Hue ranges from 0 to 360, representing degrees on the color wheel.  
     - Saturation is color intensity, lightness controls light/dark shade.  
     - Easier to select colors based on concepts like color wheels.
- Hex codes and HSL are common in professional design, whereas named colors like `blue` are often avoided for consistency issues between browsers.

## Alpha Channel for Opacity
- Both RGB and HSL support adding an alpha channel to define transparency/opacity.  
- This is done by adding an "a" to the syntax (`rgba` or `hsla`) and specifying a value between 0 (fully transparent) and 1 (fully opaque).  
- Example: `rgba(65, 65, 65, 0.5)` for 50% opacity.

## Applying Colors and Styles in CSS
- CSS styles can be applied in three ways:
  1. **External CSS file:**  
     - Create a separate `.css` file (e.g., `style.css`) and link it in the HTML `<head>`.  
     - Recommended for larger projects for maintainability.
  2. **Internal `<style>` tag in HTML `<head>`:**  
     - Write CSS rules inside the `<style>` tag in the HTML file.  
     - Example targeting the entire `<body>` element with background color and text color.
  3. **Inline styling with the `style` attribute:**  
     - Add styles directly within an element’s HTML tag using `style=""`.  
     - Best suited for quick demos but not recommended for production.

- CSS property example for coloring text and background:
  ```css
  body {
      background-color: #414141;
      color: white;
      text-align: center;
  }
  ```

## CSS Priority and Overriding Styles
- CSS specificity and priority:
  - Inline styles override internal or external styles.
  - Internal styles override external styles.
  - The order and placement of CSS rules impact which rules take effect.
- When multiple CSS rules conflict, the rule with higher specificity or last loaded rule applies.

## Quotes in HTML
- Quotations have semantic meaning and are important for search engine ranking.
- Quotes can be created using the `<blockquote>` tag (block-level for long quotations) or inline quotes using `<q>`.
- Citation and source attribution can be added with attributes like `cite`.
- Example of a blockquote:
  ```html
  <blockquote cite="source_url">
      This is a quoted passage.
  </blockquote>
  ```

## Abbreviations and Other Tags
- Abbreviation tags like `<abbr>` indicate shortened forms with the `title` attribute giving full form on hover.
- Examples:
  ```html
  <abbr title="HyperText Markup Language">HTML</abbr>
  ```

## Address and Direction Tags
- `<address>` tag provides contact information, recognized by browsers and assistive technologies.
- The `dir` attribute can specify text direction:
  - `ltr` for left-to-right (default)
  - `rtl` for right-to-left (used in Arabic, Hebrew, Urdu languages)
- This controls how the content is rendered and aligned.

## Assignments and Recommendations
- Students are encouraged to regularly check official HTML and CSS documentation for updated and detailed understanding.
- Keep practicing by creating sample files and applying styles as demonstrated.
- Use the `style.css` file for external styling and link it properly in the HTML head.
- Explore color values using browser tools and color pickers integrated with editors like VSCode.
- Practice creating quotations, addresses, and effective text direction handling using HTML tags.

These notes comprehensively cover the technical concepts, practical tips, and recommendations provided in the video on using color values and CSS formatting in HTML.