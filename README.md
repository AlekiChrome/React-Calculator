# React Calculator

## Table of Contents
- [General Info](#general-info)
- [Project Development](#project-development)
1. [Low Fidelity Wireframe](#low-fidelity-wireframe)
2. [High Fidelity Mockup](#high-fidelity-mockup)
3. [Calculator Demo](#react-calculator-demo)


## General Info
---
### Using reactjs i've built a calculator showcasing the library's capabilities and my ability to navigate through the language's syntax and methods.

<span style="color: orange"> *Other libraries being used are:* </span>

- MathJS
- ~~react-number-format~~

<span style="color: orange"> *Ongoing things to include* </span>
- ~~Adding a comma to seperate thousands and a full stop for place formatting~~
- Recognizing positive and negative integers
- Add scientific operators

## Project Development
---
 > ### *Low Fidelity Wireframe*

![ReactJS-Calculator-low-fidelity-wireframe](src/images/React-Calculator.png)

> Breaking down the project components that I believed I would need, I created a mock-up (wireframe made using draw.io).

#### This has been broken into 4 components:
1. The display component which would display the calculations input by the user and the result above that.
2. The display's styling file. This uses css flexbox to display how the result and calculations are laid out in to the screen.
3. The button component for the event handling. Using onClick to register output to the display.
4. The button styling file. This also utilizes flexbox to order the placement of the calculators body as well as incorporating user accessibility with the hover effect and color contrasts.

React's root file being accessed in App.js is where all the rendering takes places and where the functionality lives. Accessing the created components through importing.

---

> ### *High Fidelity Mockup*

![ReactJS-Calculator-high-fidelity-Mockup](src/images/Figma-High-Fidelity-Mockup.png)


---
> ### *React Calculator Demo*
![ReactJS-Calculator-gif](src/images/React-Calc-giphy.gif)

<br />

[Calculator Site](https://candys-react-calculator.netlify.app/)
