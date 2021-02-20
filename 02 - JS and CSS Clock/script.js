const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  console.log(getSeconds);
};

setInterval(setDate, 1000);
setDate();



// (()=> {
//   const
//     secondHand = document.querySelector('.second-hand'),
//     minuteHand = document.querySelector('.min-hand'),
//     hourHand = document.querySelector('.hour-hand')

//   // Helper function responsible for calculating the amount to rotate a hand
//   const calcDegrees = (time, max) => ((time / max) * 360) + 90;
//   // Call function once every second
//   setInterval(() => {

//   // Create new Date object
//   const now = new Date();

//   // Get current seconds, minutes, & hours and calculate the degree shift
//   const
//     secondHandDegrees = calcDegrees(now.getSeconds(), 60),
//     minuteHandDegrees = calcDegrees(now.getMinutes(), 60),
//     hourHandDegrees = calcDegrees(now.getHours(), 12);

//   // Apply rotation to the clock hands corresponding with current time value
//   secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
//   minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
//   hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
// }, 1000);
// })();

