"Date and time in depth in JavaScript"


## JavaScript Date Basics

- The `Date` object in JavaScript represents a single point in time.
- JavaScript dates are based on the number of milliseconds since January 1, 1970 (the Unix Epoch).
- By default, calling `new Date()` returns the current date and time.

### Creating Dates

- Current date and time:
  ```js
  let now = new Date();
  ```
- Specific date components (year, month [0-indexed], day, hour, min, sec, ms):
  ```js
  let customDate = new Date(2023, 0, 23); // Jan 23, 2023
  let dateWithTime = new Date(2023, 0, 23, 5, 3);
  ```
- ISO-formatted string (YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ):
  ```js
  let isoDate = new Date("2023-01-23");
  ```
- Milliseconds timestamp:
  ```js
  let milliseconds = Date.now();
  ```

***

## Date Methods and Formatting

- Convert to string:
  - `.toString()` – full string with date, time, and timezone
  - `.toDateString()` – only the date part
  - `.toLocaleString()` – according to the system or specified locale (customizable)
  - `.toISOString()` – ISO 8601 format (`2023-01-23T00:00:00.000Z`)
- Example:
  ```js
  let now = new Date();
  now.toString();
  now.toLocaleString("en-IN");
  now.toISOString();
  ```

***

## Getting and Setting Date Components

- `.getFullYear()`: Year (e.g. 2023)
- `.getMonth()`: Month (0–11, add +1 for human-readable form)
- `.getDate()`: Day of the month
- `.getDay()`: Day of the week (0–6, Sun–Sat)
- `.getHours()`, `.getMinutes()`, `.getSeconds()`, `.getMilliseconds()`
- You can also set these components using `.setFullYear()`, `.setMonth()`, etc.

***

## Comparing and Calculating with Dates

- Dates can be compared using their millisecond values.
- Subtracting two Date objects gives the difference in milliseconds:
  ```js
  let d1 = new Date(2023, 0, 1);
  let d2 = new Date(2023, 0, 23);
  let diff = d2 - d1; // in ms
  let diffInDays = diff / (1000 * 60 * 60 * 24);
  ```

***

## Timestamps and Conversion

- `Date.now()` returns the current timestamp in milliseconds.
- To get a timestamp from a Date object: `.getTime()`
- To get current time in seconds, divide by 1000 and optionally round:
  ```js
  let sec = Math.floor(Date.now() / 1000);
  ```

***

## Formatting Tricks

- Customizing output using `toLocaleString()`:
  ```js
  let now = new Date();
  now.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  ```
- You can use options to get only what you need: time, date, numeric, etc.

***

## Advanced: Future API (Temporal)

- There are future plans for a new `Temporal` global object, which will provide more robust date/time handling.
- For now, use the standard `Date` and related methods for compatibility.

***

## Best Practices

- Always remember months are 0-indexed (`January` = 0).
- Use `.toLocaleString()` for user-facing dates to respect user settings.
- For precise date calculations or timezone manipulations, consider using dedicated libraries (like `date-fns` or `luxon`) until `Temporal` is broadly available.

***

These notes summarize everything you need to start working with dates and times in modern JavaScript, including creation, formatting, component access, comparison, and best practices.