# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS

### What I learned

so apparently this 

```
.element {
    background: hsl(217, 12%, 63%, .2) url(./images/icon-star.svg) no-repeat;
}
```

is a totally different thing than this???

```
.element {
    background: hsl(217, 12%, 63%, .2), url(./images/icon-star.svg) no-repeat;
}
```

with the comma between it just displays the grey and covers the star but without comma it places one on top of the other and displays grey with a star? and i had to find that out randomly by mistake???


### Continued development

I tried to keep it DRY and created five hundred million functions maybe I overdid it? anyway i still suck at guessing sizes

## Author

- Frontend Mentor - [@tortaruga](https://www.frontendmentor.io/profile/tortaruga)
