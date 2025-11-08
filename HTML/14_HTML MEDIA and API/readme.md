"HTML MEDIA and API"

## Overview
- The video has two parts: 
  1. How to integrate audio and video in HTML.
  2. Introduction to some HTML APIs like Drag and Drop, Canvas, Geolocation with brief explanation on their use and importance.

***

## Integrating Audio and Video in HTML

### Video Tag
- Use the `<video>` tag to embed video files directly hosted on your server.
- Syntax:
  ```html
  <video width="320" height="240" controls autoplay muted>
    <source src="video.mp4" type="video/mp4">
  </video>
  ```
- Attributes:
  - `src` or within `<source>` tag.
  - `width` and `height` for sizing.
  - `controls` to show play/pause etc.
  - `autoplay` to start playing automatically.
  - `muted` to mute sound on autoplay (many browsers require this).
- Videos should be served with the HTML file from the same server to avoid loading issues.

### Common Errors and Fixes
- If videos don’t load, verify file paths and server directory configuration.
- Live server expects files to be served from the same folder structure as the HTML file.

### Audio Tag
- The `<audio>` tag works like `<video>` but for audio files.
- Attributes include `controls`, `autoplay`, and `muted`.
- Example:
  ```html
  <audio controls autoplay muted>
    <source src="audio.mp3" type="audio/mpeg">
  </audio>
  ```

***

## HTML APIs Overview

### JavaScript Dependency
- Advanced capabilities like Drag and Drop, Canvas drawing, and Geolocation require JavaScript.
- HTML provides the structure, but functionalities are enabled through JS APIs.

### Geolocation API
- Allows access to user's location data.
- Cannot be directly handled by HTML alone; requires JS.

### Canvas API
- Enables dynamic drawing and animations within a web page.
- Is a part of HTML5 but used with JavaScript.

### Drag and Drop API
- Enables dragging elements and dropping them in designated areas.
- Supported by JavaScript, not solely by HTML.

***

## Myths and Realities
- Some people believe HTML alone can handle these APIs; this is a misconception.
- All these advanced features rely heavily on JavaScript for interaction.

***

## Summary
- Use HTML media tags like `<video>` and `<audio>` to embed media files hosted on your own server.
- For more interactive and dynamic features, learn JavaScript APIs like Canvas, Geolocation, and Drag and Drop.
- Always check your file paths and server setup when embedding local media.
- This video clarifies what HTML can and cannot do on its own and emphasizes the importance of JavaScript for advanced functionalities.


These notes provide a thorough understanding of media integration and relevant web APIs as explained in the video.