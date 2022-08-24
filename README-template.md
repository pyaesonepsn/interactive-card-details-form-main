# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](images/result.png)

### Links

- Solution URL: [https://github.com/pyaesonepsn/interactive-card-details-form-main](https://github.com/pyaesonepsn/interactive-card-details-form-main)
- Live Site URL: [https://pyaesonepsn.github.io/interactive-card-details-form-main/](https://pyaesonepsn.github.io/interactive-card-details-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SCSS
- Vanilla JavaScript


### What I learned

In this project, I've learned how to validate the form using JavaScript and DOM manipulation.
I've challenges to validate the form using JavaScript.

This is the form validation code I'm proud of.
```js
const isValidForm = () => {
  const isValidName = !isEmpty(nameInput.value);
  const isValidNumber =
          !isEmpty(numberInput.value.split(" ").join("")) &&
          !hasCharacters(numberInput.value.split(" ").join(""));
  const isValidMonth =
          !isEmpty(monthInput.value) && !hasCharacters(monthInput.value);
  const isValidYear =
          !isEmpty(yearInput.value) && !hasCharacters(yearInput.value);
  const isValidCVC = !isEmpty(cvcInput.value) && !hasCharacters(cvcInput.value);

  return (
          isValidName && isValidNumber && isValidMonth && isValidYear && isValidCVC
  );
};
```

### Continued development

It will be better if I add the CSS animation to form fields for the aesthetics of the form.

## Author

- Website - [https://portfolio-pyaesone.netlify.app/](https://portfolio-pyaesone.netlify.app/)
- Frontend Mentor - [@pyaesonepsn](https://www.frontendmentor.io/profile/pyaesonepsn)
- Twitter - [@pyaesonepsn](https://www.twitter.com/pyaesonepsn)
