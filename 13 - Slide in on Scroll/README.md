## Exercise 13: Slide In On Scroll

Given an HTML document with multiple paragraphs and images, write the necessary JavaScript code to slide the images into view when the user scrolls to a point where it would be logical to display the image.

## Guide

NOTE: Differences between my solution and the official answer key are:

Change debounce() to utilize let & const where applicable
Declare const and define as result of calling debounce() on the event handler function
Pass previously declared const into event listener
Declare a const and define it as a reference to all elements with a class 'slide in'. We're going to attach an event listener to the entire window object, and listen for the 'scroll' event. We've been provided with a function, debounce(), which is explained in detail here. debounce() accepts a function as it's first parameter, and will only call that function after N milliseconds have passed (where N is the second parameter). We'll use debounce() to limit the amount of times the event handler is called, since the having a function responsible for DOM manipulation being called every time the user scrolls can be extremely taxing on the browser.

The function which will be used as the event handler is a bit complex due to some funky math we have to do. I'll break it down into steps as opposed to writing out a text-only guide first.

## Steps:

Declare a const and define it as an arrow function:

    const checkSlide = () => { }

Iterate through the const referencing the HTML Node elements with a class 'slide in':

    const checkSlide = () => {
    sliderImages.forEach(slider => {

    })
    }

Declare & define four const variables as the point at which the image should be displayed:

    // The current scroll location in relation to the midway point of the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2,
      // The bottom of the image in relation to the entire page
      imgBottom = sliderImage.offsetTop + sliderImage.height,
      // Boolean value to decide if user has scrolled past the midway point of an image
      isHalfShown = slideInAt > sliderImage.offsetTop,
      // Boolean value to decide if the user has scrolled the image out of view
      isInView = window.scrollY < imgBottom;

If the user has scrolled to a point where they are past the midway point of an image and the image is still in view, attach the 'active' class to the image. Otherwise remove it.

    // As ternary operator
    (isHalfShown && isInView) ?
        sliderImage.classList.add('active') : sliderImage.classList.remove('active');

Pass this arrow function into debounce():

    const checkSlide = debounce(() => {
    sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2,
      imgBottom = sliderImage.offsetTop + sliderImage.height,
      isHalfShown = slideInAt > sliderImage.offsetTop,
      isInView = window.scrollY < imgBottom;

    (isHalfShown && isInView) ?
      sliderImage.classList.add('active') : sliderImage.classList.remove('active');
    })
    })

Attach an event listener to the window object, listen for the 'scroll' event, and provide the previously declared const as the event handler.

    window.addEventListener('scroll', checkSlide)
