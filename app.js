'use strict';

var catalogItemArray = [];
var timesClicked = 0;

function CatalogItem(picturePath, description, timesClicked) {
    this.picturePath = picturePath;
    this.description = description;
    this.timesClicked = timesClicked;

    catalogItemArray.push(this);
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

function getRandomItemNumber() {
    var randomItemNumber = Math.floor(Math.random() * catalogItemArray.length);
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

function renderCatalogItem() {

    var randomIndex = getRandomItemNumber();
    var currentItem = catalogItemArray[randomIndex];
    var catalogReference = document.getElementById('catalog-item');
    var catalogReference2 = document.getElementById('catalog-item2');
    var catalogReference3 = document.getElementById('catalog-item3');

    function firstImage() {
        randomIndex = getRandomItemNumber();
        currentItem = catalogItemArray[randomIndex];
        catalogReference.src = currentItem.picturePath;
        catalogReference.alt = currentItem.description;
        while (randomIndex === previousItem) {
            randomIndex = getRandomItemNumber();
        }
        previousItem = currentItem;
    }

    function secondImage() {
        randomIndex = getRandomItemNumber();
        currentItem = catalogItemArray[randomIndex];
        catalogReference2.src = currentItem.picturePath;
        catalogReference2.alt = currentItem.description;
        while (randomIndex === previousItem) {
            randomIndex = getRandomItemNumber();
        }
        previousItem = currentItem;
    }

    function thirdImage() {
        randomIndex = getRandomItemNumber();
        currentItem = catalogItemArray[randomIndex];
        catalogReference3.src = currentItem.picturePath;
        catalogReference3.alt = currentItem.description;
        while (randomIndex === previousItem) {
            randomIndex = getRandomItemNumber();
        }
        previousItem = currentItem;
    }

    firstImage();
    secondImage();
    thirdImage();
}

renderCatalogItem();
var catalogReference = document.getElementById('catalog-item');
catalogReference.addEventListener('click', renderCatalogItem);

var catalogReference2 = document.getElementById('catalog-item2');
catalogReference2.addEventListener('click', renderCatalogItem);

var catalogReference3 = document.getElementById('catalog-item3');
catalogReference3.addEventListener('click', renderCatalogItem);