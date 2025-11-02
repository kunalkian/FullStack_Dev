<!-- Table tag/Element -->
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table

"Tables in HTML"

## Introduction to HTML Tables
- Tables in HTML are used to display tabular data in rows and columns.
- Historically, tables were also used for page layout, but now they are primarily for data representation.

## Creating Tables in HTML
- Basic structure:
  - `<table>`: The container tag for the table.
  - `<tr>`: Defines a table row.
  - `<th>`: Defines a table header cell (usually bold and centered).
  - `<td>`: Defines a table data cell (normal content cell).
- Example of a simple table:
  ```html
  <table>
    <tr>
      <th>Country</th>
      <th>Country Code</th>
      <th>Email</th>
    </tr>
    <tr>
      <td>India</td>
      <td>IN</td>
      <td>india@example.com</td>
    </tr>
  </table>
  ```
- Emmet shortcuts in VSCode can speed up writing table structures (e.g. `table>tr*3>th*3`).

## Table Rows and Cells
- Rows group the cells horizontally.
- Cells contain the data and are nested inside rows.
- Ensure closing tags for table elements for consistent behavior.
- Use shortcuts for duplicating rows or cells to speed up coding.

## Styling Tables with CSS
- Use CSS to improve the appearance of tables:
  - Set `width` to 100% to make tables responsive.
  - Use `border-collapse: collapse;` to merge cell borders.
  - Add `border` properties to cells and table for outlines.
  - Example CSS:
    ```css
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid black;
      padding: 10px;
      text-align: center;
    }
    ```
- Highlight rows using CSS by targeting `<tr>` elements.
- Use colors to improve readability and emphasis.

## Table Attributes and Features
- `colspan`: Allows a cell to span multiple columns.
- `rowspan`: Allows a cell to span multiple rows.
- Useful for creating complex table layouts like merged headers or grouped data.
- Use these sparingly and with care to maintain table readability and accessibility.

## Best Practices and Notes
- Keep accessibility in mind: Proper header cells and captions improve usability.
- Use semantic markup for better SEO and screen-reader support.
- Use CSS for layout rather than using tables to structure entire pages.
- Explore advanced table features and plugins as needed for interactivity like sorting and filtering.

## Additional Tips
- Remember browsers have some default CSS styles for tables.
- Avoid very complex tables on small screens; consider other layouts like flexbox or grids for responsive design.
- Read documentation and practice regularly to master table usage and styling.


These notes provide a comprehensive overview of creating, styling, and managing tables in HTML as explained in the video, with practical tips and examples.