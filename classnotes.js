'use strict';

// Vinicio - I'm creating variables here to follow the DRY principle
// DON'T REPEAT YOURSELF
var goatOneId = "goat-one";
var goatTwoId = "goat-two";

// Vinicio - this is a "constant", a value that we aren't going to change in code
var MAX_CLICKS = 10;

var goats = []; // Vinicio - this is an empty array
var goatDescriptions = [];
// Vinicio - this would be an empty object {}

// Vinicio - this clicks all of them
var totalClicks = 0;

function RandomIndexGenerator() {
  // Vinicio - I'm using -1 and -2 so that EVERYTHING is different than them
  this.previousIndices = [-1, -2];
  this.currentIndices = [];

  this.getRandomIndex = function() {
    var randomNumber = Math.floor(Math.random() * goats.length);
    return randomNumber;
  }

  // Vinicio - this function will make sure that a new index is not present
  // in either the current values or the previous values
  this.isIndexDuplicated = function(newRandomNumber) {
    return this.currentIndices.includes(newRandomNumber) || this.previousIndices.includes(newRandomNumber);
  }

  // Vinicio - this function will make sure to generate 2 goats that are unique
  this.getTwoRandomIndices = function() {
    this.previousIndices = this.currentIndices;
    this.currentIndices = []; 

    var newRandomNumber = this.getRandomIndex();    

    while(this.currentIndices.length < 2) {
      if(this.isIndexDuplicated(newRandomNumber)){
        newRandomNumber = this.getRandomIndex();
      } else {
        this.currentIndices.push(newRandomNumber);
        newRandomNumber = this.getRandomIndex();
      }
    }
  }
  this.saveRandomNumber = function() {
  }
}

var random = new RandomIndexGenerator();

function renderRandomTwoGoats(event) {
  //--------------------------------------------------------------------------------
  // COUNTER MANAGEMENT
  //--------------------------------------------------------------------------------
  if(event) {
    for(var i = 0; i < goats.length; i++) {
      if(event.target.alt == goats[i].description) {
        // Vinicio - we found our goat!
        goats[i].registerClick();
      }
    }
    totalClicks++;

    if(totalClicks === MAX_CLICKS) {
      renderChart();
    }
  }
  //--------------------------------------------------------------------------------

  random.getTwoRandomIndices();
  var goatIndices = random.currentIndices;

  // Vinicio - moving this here to avoid using another global variable
  var goatOneReference = document.getElementById(goatOneId);
  var goatTwoReference = document.getElementById(goatTwoId);

  // Vinicio - get the indices by themselves
  var randomIndexOne = goatIndices[0];
  var randomIndexTwo = goatIndices[1];

  // Vinicio - here we get the actual goats with the indices we extracted
  var goatOne = goats[randomIndexOne];
  var goatTwo = goats[randomIndexTwo];

  goatOneReference.src = goatOne.picturePath;
  goatOneReference.alt = goatOne.description;

  goatTwoReference.src = goatTwo.picturePath;
  goatTwoReference.alt = goatTwo.description;
}

function Goat(picturePath, description){
  this.picturePath = picturePath;
  this.description = description;

  // Vincio - this tracks clicks, but for one goat
  this.timesClicked = 0;

  // Vinicio - let's be careful with side effects
  goats.push(this);
  goatDescriptions.push(description);

  this.registerClick = function() {
    this.timesClicked++;
  }
}

new Goat('img/cruisin-goat.jpg', 'A goat with special accomodations');
new Goat('img/kissing-goat.jpg', 'Two goats kissing');
new Goat('img/sassy-goat.jpg', 'A goat that is very sassy');
new Goat('img/smiling-goat.jpg', 'A goat that smiles');
new Goat('img/sweater-goat.jpg', 'A goat that is cold');
new Goat('img/flower-goat.jpg', 'A goat with a flower');
new Goat('img/goatogenic.png', 'A photogenic goat');
new Goat('img/jumping.jpg', 'A jumping goat');
new Goat('img/pushy-goat.jpg', 'A pushy goat');
new Goat('img/tongue.jpg', 'Tongue sticking out goat');
new Goat('img/underbite.jpg', 'Underbite goat');

var goatOneReference = document.getElementById(goatOneId);
var goatTwoReference = document.getElementById(goatTwoId);

goatOneReference.addEventListener('click', renderRandomTwoGoats);
goatTwoReference.addEventListener('click', renderRandomTwoGoats);

renderRandomTwoGoats();

function renderChart() {
  var canvasReference = document.getElementById("results-chart");

  var totalVotes = [];
  for(var i = 0; i < goats.length; i++) {
    totalVotes.push(goats[i].timesClicked);
  }

  new Chart(canvasReference, { 
    type: 'bar',
    data: {
      labels: goatDescriptions,  // label for each individual bar
      datasets: [{
        label: 'Votes Per Goat',
        data: totalVotes, // an array of the number of votes per goat
        backgroundColor: ['red', 'blue', 'green', 'orange', 'pink', 'black', 'red', 'blue', 'green', 'orange', 'pink'],
      }],
    },
    options: {
      scales: {
        yAxes: [{
          tick: {
            beginAtZero: true,
          }
        }]
      }
    }
  });
};
