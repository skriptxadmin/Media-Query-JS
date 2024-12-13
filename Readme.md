**Description:**  
A lightweight and flexible library for managing CSS media queries programmatically. This utility simplifies responsive design by providing an easy-to-use API for detecting and reacting to viewport changes. Perfect for developers seeking to streamline responsive UI development across projects.

**Features:**  
- Simplified media query detection with readable syntax.  
- Event listeners for media query changes.  
- Customizable breakpoints and support for complex query strings.  
- Lightweight with no external dependencies.  
- Compatible with modern browsers.  

**Use Cases:**  
- Creating dynamic layouts that adapt to different screen sizes.  
- Managing responsive design logic in JavaScript/TypeScript applications.  
- Building reusable, breakpoint-aware components.  

**Get Started:**  
Include this library in your project to take control of your responsive design needs without writing repetitive CSS media query code.  

**Installation**

```sh

npm install @skriptx2/jsmediaquery

```

**Code Usage**

```js
import { MediaQuery } from "@skriptx2/jsmediaquery";

MediaQuery.sm(); // returns true if between 577px and 767px

MediaQuery.get(); // returns breakpoints

```

**Examples**

![Alt text](https://github.com/skriptxadmin/Media-Query-JS/blob/main/images/less-than-577px.png?raw=true "Less than 577px")

![Alt text](https://github.com/skriptxadmin/Media-Query-JS/blob/main/images/greater-than-767px.png?raw=true "Greater than 767px")

![Alt text](https://github.com/skriptxadmin/Media-Query-JS/blob/main/images/between-577px-and-767px.png?raw=true "Between 577px & 767px")

To change the breakpoint

```js

MediaQuery.set({sm:700}) // sets sm max breakpoint to 700px

```

![Alt text](https://github.com/skriptxadmin/Media-Query-JS/blob/main/images/set-sm-700px.png?raw=true "Changing break point to 700px")

**Full Usage**

```js

MediaQuery.xs(); // Extra small device
MediaQuery.gtxs(); //  Greater than extra small device
MediaQuery.ltsm(); // Less than small device
MediaQuery.sm(); // Small device
MediaQuery.gtsm(); // Greater than small device
MediaQuery.ltmd(); // Less than medium device
MediaQuery.md(); // Medium device
MediaQuery.gtmd(); // Greater than medium device
MediaQuery.ltlg(); // Less than large device
MediaQuery.lg(); // Large device
MediaQuery.gtlg(); // Greater than large device
MediaQuery.ltxl(); //  Less than extra large device
MediaQuery.xl(); //  Extra large device
MediaQuery.gtxl(); //  Greater than extra large device
MediaQuery.ltxxl(); //  Less than double extra large device
MediaQuery.xxl(); //  Double extra large device

MediaQuery.all(); // Returns all values
MediaQuery.set(); // Sets breakpoints
MediaQuery.get(); // Gets breakpoints
MediaQuery.innerWidth; // Gets window innerwidth

```

Contributions are welcome! 🎉