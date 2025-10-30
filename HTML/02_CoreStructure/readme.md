"Core structure of HTML and Meta tags"

### Understanding HTML's Role and Structure
- HTML is not just about big and small headings (like h1 for big, h2 for smaller)—the actual meaning is deeper.
- The size of headings can be changed with CSS; h1 and h2 are for semantic structure, not just visual hierarchy.
- HTML stands for HyperText Markup Language, but it's more useful to remember it as a syntactical and declarative language—a language used to structure web pages.
- Unlike programming languages, HTML focuses on structure, not logic, and plays a core role in making web pages understandable to browsers and search engines.

### Importance of Semantic Tags
- Tags like <h1>, <h2>, <footer>, <address> serve a semantic purpose (e.g., defining the main heading, subheadings, footers, and contact information).
- Using these tags correctly helps search engines and bots understand content structure, improving SEO (search engine optimization).
- Proper use of tags makes it easier for Google and other search engines to extract meaningful information from your page, like locating site addresses automatically.

### Core HTML Document Structure
- Every HTML page starts with the <!DOCTYPE html> declaration, which tells the browser that the document is an HTML5 document.
- The root tag <html> follows, often with a `lang` attribute to specify the document's language (such as `en` for English, `hi` for Hindi).
- Inside <html>, there are two main child elements: <head> and <body>:
  - <head> contains metadata, title, links to CSS, scripts, and meta tags.
  - <body> contains all content visible on the web page to users.
- Example of HTML structure:

  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Page Title</title>
    </head>
    <body>
      <h1>This is a Heading</h1>
    </body>
  </html>

- The relationship is often parent (html) → child (head/body) → grandchild (e.g., title/h1).

### Visual vs. Head Contents
- Only two things inside the <head> are typically visible to the user:
  - The document title (shown in the browser tab)
  - The favicon (small icon in the browser tab).
- All other head contents are instructions and information for browsers, search engines, and social media.

### Meta Tags in HTML
- Meta tags contain additional information about the page (not visible on the page, but useful for browsers and bots).
- The most important meta tags include:
  - <meta charset="UTF-8"> for character encoding (supporting emojis, different languages)
  - <meta name="viewport" content="width=device-width, initial-scale=1.0"> to make the website responsive on different devices.
- Google’s developer resources are recommended for easily finding best-practice meta tags.
- You can add various meta tags like "description" to describe the site content for search engines:

  <meta name="description" content="A sample page demonstrating meta tags">

### Syntax Conventions and Best Practices
- HTML tags are case-insensitive, but best practice is to use lowercase.
- Always close your tags where required, even if browsers often don’t show errors for missing closing tags—this is important for future-proofing your code, especially when moving to frameworks or libraries like React.
- Some tags (like <br>) are self-closing, while most elements have both opening and closing tags.

### Moving Forward
- The video wraps up by stressing the importance of using HTML tags properly and semantically.
- Future lessons will cover more about tags, their attributes, and their significance for page structure and interactivity.

These notes capture all the key instructional points and best practices shared in the video for beginners learning HTML's core structure and the reasoning behind meta tags.

<!-- Check out these link here you would find all about the meta tags and their attributes -->
https://developers.google.com/search/docs/crawling-indexing/special-tags