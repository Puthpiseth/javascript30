## Exercise 16: Mouse Move Shadow

We're given an HTML document with a div element containing an h1 element. The h1 element has a textShadow style property which we want to manipulate depending on the user's current mouse location. Write the necessary JavaScript code to bring functionality to this page.

## Guide

In the script tag, we're provided with three const (constant) variables: one which references the div element with class hero, one which references the h1 element that is a child of the hero div element, and one which is defined as a number literal value. We'll use the latter when we're calculating the textShadow distance.

Begin by attaching an event listener to the hero div element that will listen for 'mousemove' events and call upon an event handler function (for brevity's sake, let's name that function 'shadow'). Declare a const variable 'shadow' and define it as an arrow function that accepts an event as a parameter; this is our event handler function. In the function body, set two const variables as the offsetWidth and offsetHeight properties of the hero div element. Then declare two let variables and define them as the event's offsetX and offsetY properties. If the event's current target is different from the event's originating target (the hero div element), increment the x & y coordinates by the distance between the current target element and the event's originating target using the offsetLeft and offsetTop properties of the original target.

Declare two const variables and define them as the stretch distance for the textShadow property on the x & y axis, respectively. Finally, update the textShadow style property of the h1 element, using the two const variables we just defined as the horizontal and vertical positions of the shadow.

## Steps:

Attach an event listener to the hero div element that will call upon a provided event handler on the 'mousemove' event.

    hero.addEventListener('mousemove', shadow)

Declare a const with a name that matches the event listener's event handler function, and define it as an arrow function which accepts an event as a parameter.

    const shadow = (e) = > { /* ... */ }

Declare two const variables and define them as the offsetWidth and offSetHeight properties of the hero div HTML element.

    // Get the width & height properties of the 'hero' div in relation
    // to the window object
    const { offsetWidth: width, offsetHeight: height } = hero;

Declare two let variables and define them as the distance of the mouse from the event's target element on the x & y axis.

    // Using ES6 object deconstruction
    let { offsetX: x, offsetY: y } = e;

    // Without ES6 object deconstruction
    let x = e.offsetX, y = e.offsetY;

If the element that is the current target of the event differs from the event's originating target, increment the values of the two previously declared variables by the distance between the originating target and the current target on the x & y axis.

    if (e.currentTarget !== e.target) {
    x += e.target.offsetLeft
    y += e.target.offsetTop
    }

Calculate the stretch distance for the element's shadow on the x & y axis

    const xWalk = Math.round((x / width * walk) - (walk / 2)),
    yWalk = Math.round((y / height * walk) - (walk / 2));

Update the textShadow style property of the h1 element.

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${-xWalk}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${-xWalk}px 0 rgba(0,255,0,0.7),
    ${-yWalk}px ${-xWalk}px 0 rgba(0,0,255,0.7)
    `;

Last step is best step! Wrap up all of the JavaScript code inside an IIFE (immediately invoked function expression).
