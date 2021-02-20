## Guide

Declare a const variable and define it as a regular expression pattern that will match the prefixes we want to exclude that is case insensitive. Create a function that will accept a string value as a parameter and and returns the string after replacing any parts of the string that match the previously defined regular expression pattern with an empty string, excluding leading or trailing whitespaces. Declare a const and define it as the result of sorting through the provided array, passing each item in the array to the previously defined function. FInally, target the unordered list and update its inner HTML to display each item in the array as a list item.

## Steps:

Declare a const variable and define as a new Regular Expression object.

    const namesPrefix = new RegExp('^(a |the |an )', 'i')

Declare a const and define it as an arrow function which accepts a parameter bandName and returns the provided argument after replacing any values that match the previously defined RegEx pattern with an empty string and removing any leading or trailing whitespace.

    const stripPrefixes = (bandName) => bandName.replace(namesPrefix, '').trim()

Declare a const and define it as the result of sorting through the bands array, passing each item into the stripPrefixes function to remove prefixes (if they exist) before comparing them.

    const sortedBands = bands.sort((a, b) => stripPrefixes(a) > stripPrefixes(b) ? 1 : -1)

Select the #bands unordered list and update the inner HTML to be the items in the sortedBands array stored within list items.

    document.querySelector('#bands').innerHTML =
    sortedBands
    .map(band => `<li>${band}</li>`)
    .join('')
