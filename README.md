# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./Capture%20d’écran%202026-06-17%20à%2009.22.19.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- BEM CSS
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

Travailler sur ce projet m'a permis de perfectionner ma gestion des dates en JavaScript et le centrage précis en CSS.

L'un des plus grands défis a été de s'assurer que Flexbox centre parfaitement l'icône SVG dans son conteneur circulaire, tout en gérant les dimensions relatives :

```css
.card__mid-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  /* L'icône à l'intérieur doit être plus petite pour laisser de l'espace au centrage */
}
```

```js
if (
  birthDate.getFullYear() !== y ||
  birthDate.getMonth() !== m - 1 ||
  birthDate.getDate() !== d
) {
  alert("Must be a valid date"); // Cas du 31/04 ou 30/02 par exemple
  return;
}
```

## Author

- Website - [Yann LE FLOHIC](SOON...)
- Frontend Mentor - [@YannLf3](https://www.frontendmentor.io/profile/YannLf3)
- Twitter - [@YannLf3](https://x.com/YannLf3)
