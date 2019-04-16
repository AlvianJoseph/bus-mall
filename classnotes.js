'use strict';

var goats = []; // Vinicio - this is an empty array
                // Vinicio - this would be an empty object {}


// Vinicio - this clicks all of them
var totalClicks = 0;

function getRandomGoatNumber() {
  var randomNumber = Math.floor(Math.random() * goats.length);
  return randomNumber;
}

var previousIndex = -1;

// Vinicio - this function 'belogs' to ALL the goats
function renderRandomGoat() {
  // Vinicio - once I click on one goat, I'll increase it's value
  // event.target

  // Vinicio - moving this here to avoid using another global variable
  var goatPictureReference = document.getElementById('goat-picture');

  var randomIndex = getRandomGoatNumber();

  // Vinicio - keep getting new random values UNTIL I get an unique one
  console.log(`Previous: ${previousIndex}`);
  while(randomIndex === previousIndex) {
    randomIndex = getRandomGoatNumber();
  }
  // Vinicio - after I calculate a new index...I have to update the previous one
  previousIndex = randomIndex;

  console.log(`Current: ${randomIndex}`);
  console.log(`----------------------`);

  var randomGoat = goats[randomIndex];

  // Vinicio - here, I have the goat I want to add to the dom
   goatPictureReference.src = randomGoat.picturePath;
   goatPictureReference.alt = randomGoat.description;
}

function Goat(picturePath, description){
  this.picturePath = picturePath;
  this.description = description;

  // Vincio - this tracks clicks, but for one goat
  this.timesClicked = 0;

  // Vinicio - let's be careful with side effects
  goats.push(this);
}

new Goat('img/cruisin-goat.jpg', 'A goat with special accomodations');
// explicitely push the new goat into the array
new Goat('img/kissing-goat.jpg', 'Two goats kissing');
new Goat('img/sassy-goat.jpg', 'A goat that is very sassy');
new Goat('img/smiling-goat.jpg', 'A goat that smiles');
new Goat('img/sweater-goat.jpg', 'A goat that is cold');

renderRandomGoat();

var goatPictureReference = document.getElementById('goat-picture');
goatPictureReference.addEventListener('click', renderRandomGoat);