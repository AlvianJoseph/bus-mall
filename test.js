
'use strict';

var AllItemsArray = [];
var timesClicked = 0;


function CatalogItem(picturePath, description, timesClicked) {
    this.picturePath = picturePath;
    this.description = description;
    this.timesClicked = timesClicked;

    AllItemsArray.push(this);
}

new CatalogItem("img/bag.jpg", 'A bag with r2d2 design');
new CatalogItem("img/banana.jpg", 'A banana');
new CatalogItem("img/bathroom.jpg", 'A bathroom');
new CatalogItem("img/boots.jpg", 'yellow boots');
new CatalogItem("img/breakfast.jpg", 'A breakfast');
new CatalogItem("img/bubblegum.jpg", 'bubblegum');
new CatalogItem("img/chair.jpg", 'A chair');
new CatalogItem("img/cthulhu.jpg", 'cthulhu');
new CatalogItem("img/dragon.jpg", 'A dragon');
new CatalogItem("img/pen.jpg", 'A pen');
new CatalogItem("img/pet-sweep.jpg", 'a pet sweep');
new CatalogItem("img/scissors.jpg", 'scissors');
new CatalogItem("img/shark.jpg", 'A shark');
new CatalogItem("img/sweep.png", 'sweep');
new CatalogItem("img/tauntaun.jpg", 'tauntaun');
new CatalogItem("img/unicorn.jpg", 'A unicorn');
new CatalogItem("img/usb.gif", 'A usb');
new CatalogItem("img/water-can.jpg", 'A water can');
new CatalogItem("img/wine-glass.jpg", 'A glass of wine');


function getRandomItem() {
    var randomItemNumber = Math.floor(Math.random() * AllItemsArray.length);
    return randomItemNumber;
}

function addClick() {
    if (timesClicked <= 25) {
        timesClicked += 1
        console.log(timesClicked);
        if (timesClicked > 25) {
            alert("Thanks for participating");
        }
    }
}

var previousItem = -1;
var randomItemArray = [];

function renderCatalogItem() {
    var randomItem = -1;
    var randomItem2 = -1;
    var randomItem3 = -1;
    var itemImage = AllItemsArray[randomItem];
    var catalogImageReference = document.getElementById('catalog-item');
    var catalogImageReference2 = document.getElementById('catalog-item2');
    var catalogImageReference3 = document.getElementById('catalog-item3');


    for (var i = 0; i < 1; i++) {
        while (randomItem === previousItem) {
            randomItem = getRandomItem();
            itemImage = AllItemsArray[randomItem];
            catalogImageReference.src = itemImage.picturePath;
            catalogImageReference.alt = itemImage.description;
            if (randomItem !== previousItem) {
                randomItemArray.push(randomItem);
                console.log(`current item: ${randomItem}`)
            } else {
                console.log('Same item as before')
                continue;
            }
        }
    }

    previousItem = randomItem2;

    for (var i = 0; i < 1; i++) {
        while (randomItem2 === previousItem) {
            randomItem2 = getRandomItem();
            itemImage = AllItemsArray[randomItem2];
            catalogImageReference2.src = itemImage.picturePath;
            catalogImageReference2.alt = itemImage.description;
            if (randomItem2 !== previousItem) {
                randomItemArray.push(randomItem2);
                console.log(`current item: ${randomItem2}`)
            } else {
                console.log('Same item as before')
                continue;
            }
        }
    }
    previousItem = randomItem3;

    for (var i = 0; i < 1; i++) {
        while (randomItem3 === previousItem) {
            randomItem3 = getRandomItem();
            itemImage = AllItemsArray[randomItem3];
            catalogImageReference3.src = itemImage.picturePath;
            catalogImageReference3.alt = itemImage.description;
            if (randomItem3 !== previousItem) {
                randomItemArray.push(randomItem3);
                console.log(`current item: ${randomItem3}`)
            } else {
                console.log('Same item as before')
                continue;
            }
        }
    }
    randomItemArray.length = 0;
}

renderCatalogItem();
var catalogImageReference = document.getElementById('catalog-item');
catalogImageReference.addEventListener('click', renderCatalogItem);

var catalogImageReference2 = document.getElementById('catalog-item2');
catalogImageReference2.addEventListener('click', renderCatalogItem);

var catalogImageReference3 = document.getElementById('catalog-item3');
catalogImageReference3.addEventListener('click', renderCatalogItem);
