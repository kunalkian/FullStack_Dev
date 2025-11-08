<!-- Input Element -->
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input

"Types of input forms"

## Introduction

- This video explores various `<input>` types used in HTML forms and their practical uses.
- There are 22-23 different input types, but the video focuses on popular and useful ones.

***

## Major Types of Input Elements

### 1. Basic Input Types
- **Text**: For single-line text.
- **Password**: Obscures input characters (used for sensitive data).
- **Email**: For email addresses; comes with basic validation.
- **Number**: Only allows numeric values.

### 2. Specialized Input Types
- **Submit**: Button to submit a form.
- **Reset**: Resets the form to its default values. Example:
  ```html
  <input type="reset" value="Reset">
  ```
- **Button**: Triggers JavaScript or custom actions; does not submit by default.

### 3. Choice Inputs
- **Radio Buttons**: Allow the user to pick one from a group (grouped by the same `name`).
- **Checkbox**: User can select or deselect as many as needed.

### 4. Selection Inputs
- **Select Dropdown (`<select>`)**: Lets you choose from a dropdown. You can enable multi-select by adding the `multiple` attribute inside `<select>`. Example:
  ```html
  <select multiple>
    <option>VS Code</option>
    <option>Sublime</option>
  </select>
  ```
- **Datalist + Input (Autocomplete)**: Provides suggestions while typing. Involves connecting `<input list="id">` to a `<datalist id="id">` containing `<option>` values.

### 5. Date & Time Inputs
- **Date**: Lets the user pick a calendar date.
- **Week**: Select a week within a year.
- **Month/Time/Datetime**: For more granular date or time input.

### 6. File & Color Inputs
- **File**: Lets user upload a file.
- **Color**: Color picker tool UI.

### 7. Hidden Input
- **Hidden**: Stores data not shown to user. Commonly used to send tokens, IDs, or data the user shouldn't change.
  ```html
  <input type="hidden" name="token" value="12345">
  ```

### 8. Range Input
- **Range**: User picks a value by sliding a bar between min and max values.
  ```html
  <input type="range" min="0" max="100" step="10" value="50">
  ```

***

## Attributes and Details

- **Value**: Default value shown in the input field.
- **Placeholder**: Text shown as a hint.
- **Checked**: Sets default checked for radio/checkbox.
- **Selected**: Sets default for a selected `<option>`.
- **Required**: Makes the input mandatory.
- **Readonly/Disabled**: Makes input uneditable or disables it.
- **Min/Max/Step**: Used on type=number, type=date, and type=range.

***

## Best Practices & Use Cases

- Use the appropriate input type for the data being collected to get built-in validation and a better user experience.
- Prefer simple, readable, and maintainable structures. Complex fields (like lists or datalist) are rarely used nowadays, but you should understand them.
- Hidden fields, though not visible, are crucial for things like CSRF tokens or IDs in web frameworks like Django.
- Study and practice with examples for radio, range, and validation attributes.
- Regularly refer to the HTML documentation for the ever-growing list of input types and their browser support.

***

## Conclusion

- HTML forms' main goal is to get user input. Modern HTML provides many options for collecting all types of data.
- Practice and experiment with various input types, attributes, and validation options for deeper understanding.


These notes summarize all important input types, attributes, best practices, and practical aspects for web forms as explained in the video.