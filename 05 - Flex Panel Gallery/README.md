## Exercise 5: Flex Panel Gallery

We are given a web page with five div HTML elements with a class panels, each containing three p HTML elements with some text. These five div elements are wrapped inside another div element with a class panel. Currently, these divs are stacked vertically and aren't interactive. We want to display these divs vertically and have only the middle p element of each div displayed; when a user clicks on a particular div element we want to expand that element and bring the two other p elements back into view. Update the CSS and write the JavaScript code necessary to bring this interactivity to the page.

Most of this challenge focuses on working with CSS3 flexible boxes, or flexbox. If you're unfamiliar with flexible boxes, here's another free course provided by Wes Bos: flexbox.io

SIDENOTE: I broke up the CSS for this challenge into a separate file because that made it easier to focus on the pieces that I was working with. Organize your code however you see fit.

## Guide

Flex box layouts consist of a flex container which contain flex items. We'll use the panels class as the flex container, and the panel class as the flex items. By default, flex items are only as wide as they need to be in order to display their contents, but we want them to take up the entire flex container. Allow the flex items to take up equal space and fill out the flex container by allowing them to grow. Given that we want the content of each flex item to be flexible as well, we're going to display the panel class as both a flex item AND a flex container; this means that elements with the panel class will adjust themselves with respect to their flex container (div HTML element with class panels), and the contents within those elements (in this case, the three p HTML elements) will adjust themselves with respect to their own flex container (div HTML element with class panels).

Horizontally and vertically center the content of the panel class, and modify the styling for any children of the panel class (.panel > \*) so that they are displayed as flex items and take up 1/3 of their respective flex container. Create new style definitions for the first and last child elements of the panel class to push them off the page and to bring them back in when their parent panel is selected, and update the CSS for the panel open class so that the selected div will be 5x larger than the other div elements. Holy CSS, Batman!

Finally, we'll write some JavaScript code to attach event listeners to each panel element that will fire when an panel is clicked on and call their respective event handlers; one event handler function will adjust the size of the panel, and the other will be responsible for bringing in the p elements that we pushed off earlier.

## CSS

Update the styling applied to the panels class to display as a flex container:

    .panels {
    /* ... */
    display: flex;
    }

Update the styling applied to each panel so that they equally maximize their width to fill out the flex container:

    .panel {
    /* ... */
     flex: 1;
    }

Update the styling applied to the panel class so that each panel is also a flex container and displays its content in columns:

    .panel {
    /* ... */
    display: flex;
    flex-direction: column;
    }

Update the styling applied to the child elements of the panel class so they are treated as flex items and are center justified:

    .panel > * {
    /* ... */
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    }

Create new style definitions for the first and last child elements of the panel class so that the content is pushed off the main page until the panel is selected by the user:

    .panel > *:first-child {
    transform: translateY(-100%);
    }

    .panel.open-active > *:first-child {
    transform: translateY(0);
    }

    .panel > *:last-child {
    transform: translateY(100%);
    }

    .panel.open-active > *:last-child {
    transform: translateY(0);
    }

Update the styling applied to the panel open class so that the selected panel takes up 5x the space of the other flex items:

    .panel.open {
    /* ... */
    flex: 5;
    }

## JavaScript

Declare & define a variable as a reference to all elements with a class panels.
Iterate through the HTML Node elements that the variable is referencing and attach an event listener for the click event to each element, providing the name of a yet-to-be-defined function as the event handler.
Repeat step 2, this time attaching an event listener for the transitionend event and providing a different function name for the event handler.
Define the function for Step 2 to toggle the class open on the function context.
Define the function for Step 3 to toggle the class open-active on the function context IF the event which triggered this function has a property name that includes the word 'flex'.
