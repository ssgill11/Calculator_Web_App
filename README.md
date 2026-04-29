# Modern Calculator

# Technologies Used:
This calculator app has been developed using Latest features of HTML5, CSS (CSS3+) and JavaScript (ES6+).

1. HTML (Clean + Semantic)
2. CSS (Modern UI + Grid + Responsive)
3. JavaScript (Clean + Safe Logic)

# The detailed explaination of each component is given below:
****************************************************************
📄 1. HTML (index.html) — Structure
****************************************************************
This file uses HTML to define the layout and elements of the calculator.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modern Calculator</title>
  <link rel="stylesheet" href="style.css">
</head>

* <!DOCTYPE html> → tells browser to use modern HTML5
* <html lang="en"> → improves accessibility & SEO
* <meta charset="UTF-8"> → supports all characters
* <link> → connects external CSS file

🔹 Main UI Container
<main class="calculator">
* Semantic tag (<main>) → better than generic <div>
* class="calculator" → used for styling

🔹 Heading
<h1>Calculator</h1>
* Title displayed on screen

🔹 Display Screen
<input type="text" id="display" readonly />
* type="text" → shows output
* id="display" → accessed in JavaScript
* readonly → prevents manual typing (only buttons work)

🔹 Buttons Container
<div class="buttons">
* Wraps all calculator buttons
* Styled using CSS Grid

🔹 Example Buttons
<button data-value="7">7</button>
<button data-action="clear">C</button>
<button data-action="equals">=</button>

Two important attributes:

✅ data-value
* Stores numbers/operators
* Example:
data-value="7"
→ JS reads this and appends 7

✅ data-action
Used for special operations:
clear
delete
equals
👉 This avoids messy inline JavaScript.

🔹 Script Link
<script src="script.js"></script>
* Connects JavaScript file
* Placed at bottom → ensures HTML loads first

****************************************************************
🎨 2. CSS (style.css) — Styling
****************************************************************
👉 This file uses CSS to design the UI.
🔹 CSS Variables (Modern Feature)
:root {
  --bg: linear-gradient(135deg, #6a11cb, #2575fc);
  --btn: #ffffff;
  --operator: #00d9ff;
}
* Reusable variables
* Easy to change theme later

🔹 Centering Layout
body {
  display: grid;
  place-items: center;
  height: 100vh;
}
* Uses CSS Grid
* place-items: center → perfect centering (modern trick)

🔹 Calculator Box
.calculator {
  backdrop-filter: blur(12px);
  border-radius: 20px;
}
* backdrop-filter → glassmorphism effect (modern UI trend)
* Rounded corners + shadow → clean design

🔹 Display Styling
#display {
  text-align: right;
  font-size: 1.5rem;
}
* Right-aligned → like real calculators
* Larger font for readability

🔹 Grid Layout for Buttons
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
* 4-column layout
* Automatically arranges buttons

🔹 Buttons
button {
  border-radius: 12px;
  transition: 0.2s;
}
* Smooth hover animation
* Modern rounded UI

🔹 Special Buttons
.operator {
  background: var(--operator);
}

.equals {
  grid-column: span 2;
}

.zero {
  grid-column: span 2;
}
* Operators → different color
* span 2 → bigger buttons (like real calculator)

****************************************************************
⚙️ 3. JavaScript (script.js) — Logic
****************************************************************
This uses JavaScript to make the calculator functional.

🔹 Selecting Elements
- const display = document.getElementById("display");
- const buttons = document.querySelector(".buttons");
* getElementById → gets display input
* querySelector → gets buttons container

🔹 Event Delegation (Modern Technique)
buttons.addEventListener("click", (e) => {

👉 Instead of adding event to every button:

* One listener handles all clicks
* Faster & scalable

🔹 Detect Button Click
- const target = e.target;
- if (!target.matches("button")) return;
* Ensures only button clicks are processed

🔹 Get Data from Button
- const value = target.dataset.value;
- const action = target.dataset.action;
Reads custom HTML attributes:
* data-value
* data-action

🔹 Add Numbers / Operators
if (value) {
  display.value += value;
}
* Appends clicked value to display

🔹 Clear Screen
if (action === "clear") {
  display.value = "";
}

🔹 Delete Last Character
if (action === "delete") {
  display.value = display.value.slice(0, -1);
}
* slice(0, -1) → removes last character

🔹 Calculate Result
if (action === "equals") {
  try {
    display.value = calculate(display.value);
  } catch {
    display.value = "Error";
  }
}
* Uses try...catch → prevents crashes

🔹 Safe Calculation Function
function calculate(expr) {
  if (!/^[0-9+\-*/.() ]+$/.test(expr)) {
    throw new Error("Invalid input");
  }
  return Function(`"use strict"; return (${expr})`)();
}

****************************************************************
What’s happening:
****************************************************************
1. ✅ Validation (IMPORTANT)
- /^[0-9+\-*/.() ]+$/
- Allows only numbers & operators
- Blocks harmful input

2. ✅ Execution
- Function(...)
* Safer alternative to eval()

****************************************************************
🧾 Final Understanding
****************************************************************
🧱 HTML → Structure
- Defines buttons, display, layout
🎨 CSS → Design
- Makes it modern, responsive, attractive
⚙️ JavaScript → Logic
- Handles clicks, updates display, calculates result

****************************************************************
🧾 Core Technologies + Versions
****************************************************************
1. HTML (HTML5)
- Version: HTML5 (Living Standard — continuously updated)
- Used Features:
- Semantic tags (<main>)
- Custom data attributes (data-*)
- Modern input handling

👉 There is no “HTML6”—HTML is now a living standard, so HTML5 is still the correct reference.

2. CSS (CSS3+)
- Version: CSS3 + modern modules (no single version anymore)
Key modules used:
- CSS Grid Layout (Level 2)
- CSS Variables (Custom Properties)
- Backdrop Filter
- Flex/Grid alignment (place-items)

👉 Like HTML, CSS is also a living standard, so instead of “CSS4”, we refer to individual modules.

3. JavaScript (ES6+)
- Version: ECMAScript 2015 (ES6) → ES2023+ features
Features used:
- const and let
- Arrow functions (=>)
- Template literals
- addEventListener
- dataset API
- try...catch
- String.slice()

👉 In 2026, most browsers support ES2020+ comfortably, so this code is fully modern.

🌐 Browser APIs / Web Platform Features

These are not separate languages, but important technologies:

4. DOM API (Document Object Model)
- Version: Living Standard
Used for:
- document.getElementById
- querySelector
- Event handling

👉 This is how JavaScript talks to HTML.

5. Event Handling System
- Type: Web API
Method Used:
- addEventListener()

👉 Modern replacement for inline onclick.

6. CSS Rendering Engine Features
- Grid layout engine
- Compositing (for blur effects)
- GPU acceleration (for animations)

👉 These are handled by browsers like:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

⚙️ JavaScript Execution Engine
This app runs inside browser engines like:
- V8 (Chrome, Edge)
- SpiderMonkey (Firefox)

🧠 Architectural Style
7. Frontend Architecture
- Type: Vanilla JavaScript (No framework)
Pattern Used:
- Event Delegation
- Separation of Concerns

🚫 Technologies NOT Used (Important Insight)
This app deliberately avoids:
❌ React
❌ Angular
❌ Vue.js

👉 This keeps it lightweight and beginner-friendly.
----------------------------------------------------------------
📊 Final Stack Summary
----------------------------------------------------------------
Layer	        Technology	        Version
----------------------------------------------------------------
Structure	    HTML	            HTML5 (Living Standard)
Styling	        CSS	CSS3+           (Grid, Variables)
Logic	        JavaScript	        ES6+ (ES2020-ready)
Interaction	    DOM API	Living      Standard
Execution	    JS Engine	        V8 / SpiderMonkey
----------------------------------------------------------------
