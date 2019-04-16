
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
new CatalogItem("img/dog-duck.jpg", 'A dog with duck');

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
    var currentItem = AllItemsArray[randomItem];
    var catalogImageReference = document.getElementById('catalog-item');
    var catalogImageReference2 = document.getElementById('catalog-item2');
    var catalogImageReference3 = document.getElementById('catalog-item3');

    while (randomItemArray.length < 1) {
        randomItem = getRandomItem();
        currentItem = AllItemsArray[randomItem];
        catalogImageReference.src = currentItem.picturePath;
        catalogImageReference.alt = currentItem.description;
        if (currentItem !== previousItem) {
            randomItemArray.push(randomItem);
            console.log(`current item: ${randomItem}`)
        } else {
            console.log('Same item as before')
        }
    }
    previousItem = currentItem;

    while (randomItemArray.length < 2) {
        randomItem2 = getRandomItem();
        currentItem = AllItemsArray[randomItem2];
        catalogImageReference2.src = currentItem.picturePath;
        catalogImageReference2.alt = currentItem.description;
        if (currentItem !== previousItem && randomItem2 !== randomItem) {
            randomItemArray.push(randomItem);
            console.log(`current item: ${randomItem2}`)
        } else {
            console.log('Same item as before')
            continue;
        }
    }
    previousItem = currentItem;

    while (randomItemArray.length < 3) {
        randomItem = getRandomItem();
        currentItem = AllItemsArray[randomItem];
        catalogImageReference3.src = currentItem.picturePath;
        catalogImageReference3.alt = currentItem.description;
        if (currentItem !== previousItem && randomItem3 !== randomItem2) {
            randomItemArray.push(randomItem);
            console.log(`current item: ${randomItem3}`)
        } else {
            console.log('Same item as before')
            continue;
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
