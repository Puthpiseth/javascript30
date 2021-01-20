
//   Add an event listener to handle key presses 
window.addEventListener('keydown', function(keydownEvent) {
  const key = document.querySelector(`div[data-key="${keydownEvent.key}"]`);

  // Add the 'playing' class to the pressed element, for visual feedback
  key.classList.add("playing");

  const sound = document.querySelector(`audio[data-key="${keydownEvent.key}"]`);
  sound.play();

  const keys = document.querySelectorAll('.key');
  keys.forEach(function (key) {
    
    // Add an event listener on the end of each key transition animation
    key.addEventListener('transitionend', function (transitionendEvent) {
      
      // Skip if it's not a transform
      if (transitionendEvent.propertyName === 'transform') {
        this.classList.remove('playing');
      }
    });
  });
});

  