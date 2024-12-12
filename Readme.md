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

**Code Usage**

```js
import { MediaQuery} from './index.js';

MediaQuery.sm(); // returns true if between 577px and 767px

MediaQuery.get(); // returns breakpoints

```

**Examples**
![Alt text](images/less-than-577px.png?raw=true "Less than 577px")
![Alt text](images/greater-than-767px.png?raw=true "Greater than 767px")
![Alt text](images/between-577px-and-767px.png?raw=true "Between 577px & 767px")

To change the breakpoint

```js

MediaQuery.set({sm:700}) // sets sm max breakpoint to 700px

```

![Alt text](images/set-sm-700px.png?raw=true "Changing break point to 700px")


Contributions are welcome! 🎉