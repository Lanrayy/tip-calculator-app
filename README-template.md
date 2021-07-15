# Frontend Mentor - Tip calculator App

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

The challenge is to create a working tip calculator.

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page.
- Calculate the correct tip and total cost of the bill per person.
- Be able to add custom percent values.
- Be able to reset the values back to their original.

### Screenshots

Desktop Design

![](design/desktop-design-empty.jpg)

Mobile Design

![](design/mobile-design.jpg)

### Links

- Repository: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- Flexbox
- Mobile-first workflow

### What I learnt

Day 1:

I learnt how to change input element's placeholder text colour. Changing the placeholder colour is not standardised across web browsers so you will have to specify specific styles for individual web browsers i.e.

```css
input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 1; /* Firefox */
}

input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: red;
}

input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: red;
}
```

Day 2:

I was experimenting with mobile first design in this project and I discovered the benfits of designing for mobile first. Since, 56% of the internet's traffic now comes from a mobile device it makes sense to make sure every website or app is optimised for mobile viewing. By using a mobile first methodology, adapting the app to a desktop view was significantly easier than the opposite. It was also a lot easier to plan a mobile view.

Day 3:

I learnt how to make the body 100% of the browser height. In order to centre the `body element`, you need to give the `html and body` element a height 100%. So the body element will automatically look to the `html element` for its height.

```css
/* Will not work*/
body {
  height: 100%;
}

/* You need to use this to make the height 100% of the browser height*/
html,
body {
  height: 100%;
}
```

### Continued development

I will use this section to outline areas that I want to continue focusing on in future projects. These could be concepts I'm still not completely comfortable with or techniques I found useful that you want to refine and perfect.

1. I would like to learn how to use css grid. I stuggled to arrange the "select tip buttons" in the way that I would like so i had to use work-rounds like adding custom classes to get it to look the way I wanted e.g. to adding spaces between the rows of the button I had to add the following classes.

```css
.left {
  margin-right: 15px;
}

.right {
  margin-right: 15px;
  margin-left: 15px;
}
```

I think this could be done better using css grid, which would have sped up the process and allow me to do more advanced positioning.

2. Mobile first design
   I will continue to experiment and refine my skill with mobile first design. I found it incredibily useful so will utilise it in future projects from this point forward.

### Useful resources

- [Changing Placeholder text colour](https://www.w3schools.com/howto/howto_css_placeholder.asp) - Helped to change the placeholder text colour of an input element.
- [Flex box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - An easy to use guide on flexboxes.

## Author

- Website - [Lanre Sodeinde](https://www.github.com/Lanrayy)
- Frontend Mentor - [@Lanrayy](https://www.frontendmentor.io/profile/Lanrayy)
- GitHUb - [@Lanrayy](https://www.github.com/Lanrayy)
