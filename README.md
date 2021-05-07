# React Calculator

## Table of Contents
- [General Info](#general-info)
- [Project Development](#project-development)
1. [Low Fidelity Wireframe](#low-fidelity-wireframe)
2. [High Fidelity Mockup](#high-fidelity-mockup)
3. [Calculator Demo](#react-calculator-demo)


## General Info
---
#### Using reactjs i've built a calculator showcasing the library's capabilities and my ability to navigate through the language's syntax and methods.

<span style="color: orange"> *Other libraries being used are:* </span>

- MathJS
- ~~react-number-format~~

<span style="color: orange"> *Ongoing things to include:* </span>
- ~~Adding a comma to seperate thousands and a full stop for place formatting~~
- Recognizing positive and negative integers
- Add scientific operators

## Project Development
---
 > ### *Low Fidelity Wireframe*

![ReactJS-Calculator-low-fidelity-wireframe](src/images/React-Calculator.png)

> Breaking down the project components that I believed I would need, I created a mock-up (wireframe made using draw.io).

#### This has been broken into 4 components:
1. The display component which would display the calculations input by the user and the result.
2. The display's styling file. This uses css flexbox to display how the result and calculations are laid out on the screen.
3. The button component for the event handling. Using onClick to register output to the display.
4. The button styling file. This also utilizes flexbox to set order to the placement of the calculators body and where the numbers sit upon it, as well as incorporating user accessibility with the hover effect and it's contrats of colors.

React's root file being accessed in App.js is where all the rendering takes place and where the functionality lives. Accessing the created components through importing.

---

> ### *High Fidelity Mockup*

![ReactJS-Calculator-high-fidelity-Mockup](src/images/Figma-High-Fidelity-Mockup.png)

> After creating the wireframe for my calculator, figuring out how I wanted it to look was next.
I wanted something that looked and felt familiar, but also stood out. I played with a few colors before deciding something a bit professional looking, but did not teeter on completely boring was the way to go for me.

1. This application is designed for browser so I wanted to create a blueprint for mobile browsing. This mockup uses and iphone 12pro body.
2. I included the safari browser format, but adding time in the upper left corner and the connectivity, wireless and battery icons in the the uper right. Following that includes it's done, url bar, the user options and it's refresh buttons.
3. The calculator mockup itself includes the screen and buttons using the colors I premeditated for what I considered my end result.
4. The footer shows safari's traditional footer. I included the forward and backward buttons, the share button icon and the browser windows button icon.

---
> ### *React Calculator Demo*
![ReactJS-Calculator-gif](src/images/React-Calc-giphy.gif)

> This is the current version on the calculator and how it both looks and operates. The link is below. 

[Calculator Site](https://candys-react-calculator.netlify.app/)
