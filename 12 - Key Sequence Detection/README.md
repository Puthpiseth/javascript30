## Exercise 12: Key Sequence Detection

We're given an HTML document with...basically nothing. There's a script tag in the document header that loads a JavaScript file from Cornify.com which will inject an image of a unicorn (unicornunicornunicorn!) into the DOM and a p element on the bottom of the page if we call cornify_add(). The goal of this challenge is to generate new unicorns every time the user successfully enters a 'secret code' that we will decide on.

I didn't make this up. Any unicorn-related questions should be directed @Wes Bos.

This one is pretty fun, and a cool little 'easter egg' you could place on your portfolio! I would. And I will.

## Guide

NOTE: You guessed it. My solution varies from the official answer key. End result is the same, but I will never stop being lazy. :)

Declare a constant and define it as your secret code in string format. Declare another constant and define it as an empty array. Attach an event listener to the window object that will listen for the 'keyup' event. We'll define the event handler as an arrow function which will accept the event as a parameter. If the key pressed matches a letter in our secret code AND was pressed in the correct order, we'll push the key pressed into our array. If the array of keys pressed matches our secret code, we can log out a message in the console, call on the cornify_add() function, and reset the array to be empty. Done!

## Steps:

Declare a constant as an emtpy array, and a constant as your secret code:

    const pressedKeys = [], secretCode = 'helloworld'

Attach an event listener to the window that will listen for the 'keyup' event, and call upon an arrow function which will accept the event as a parameter:

    window.addEventListener('keyup', (e) => { })

In JavaScript, strings are iterable objects, meaning we can do a lot of the same things with a string that we could do with an array. Try logging out the value of your secret code at the index matching the array's length (which should currently be 0). You should get the first character of your secret code. Knowing this, we can check to see if the key property of the event matches our secret code at the current array's length. If it does, we'll push that key value into our array. Otherwise, empty the array:

/_ Inside the body of the arrow function _/

    // As a ternary operation (can also be done as standard 'if/else' conditional statement)
    secretCode[pressedKeys.length] === e.key ? pressedKeys.push(e.key) : pressedKeys.length = 0;


    // If you prefer 'if' statements
    if ( secretCode[pressedKeys.length] === e.key ) {
    pressedKeys.push(e.key)
    } else {
    pressedKeys.length = 0
    }

Join the values in the array and compare it with your secret code: if they match, log out a statement, call the cornify_add() function, and clear out the array:

    /* Inside the body of the arrow function */

    if (pressedKeys.join('') === secretCode) {
    console.info('Hello you handsome devil!')
    cornify_add()
    pressedKeys.length = 0
    }

Wrap your JavaScript logic in an IIFE (immediately invoked function expression) so as to avoid polluting the global namespace:

    (() => {
    /* All of the previously written code goes inside here */
    })(); /* <-- Call the function immediately (hence, immediately invoked function) */
