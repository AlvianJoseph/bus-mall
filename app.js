'use strict';

var goats = [];

function getRandomGoatNumber(){
    var randomNumber = Math.floor(Math.random()* goats.length);
    //Variable makes it easier to debug with console logs
    return randomNumber;
}

function renderRandomGoat(){
    var goatPictureReference = document.getElementById('goat-picture');
    var randomIndex = getRandomGoatNumber();
    var randomGoat = goats[randomIndex];

    goatPictureReference.src = randomGoat.picturePath;
    goatPictureReference.alt = randomGoat.description;

}

function Goat(picturePath, description){
    this.picturePath = picturePath;
    this.description = description;

    goats.push(this);
}

new Goat('img/cruisin-goat.jpg', 'A goat with special accomodations');
new Goat('img/kissing-goat.jpg', 'Two goats kissing');
new Goat('img/sassy-goat.jpg', 'A goat that is sassy');
new Goat('img/smiling-goat.jpg', 'A goat smiling');
new Goat('img/sweater-goat.jpg', 'A goat with with a sweater');

renderRandomGoat();

var goatPictureReference = document.getElementById('goat-picture');
goatPictureReference.addEventListener('click', renderRandomGoat);

var previousIndex =-1;
while(randomIndex === previousIndex){
    randomIndex = getRandomGoatNumber();
}

var musicPlayerReference = document.getElementById('music-player')
var changeVolumeReference = documnet.getElementById('change-volume')

//functions are values so they can be sent as arguments
changeVolumeReference.addEventListener('click', function(){
    var musicPlayerReference = document.getElementById('music-player')
    musicPlayerReference.volume;
})