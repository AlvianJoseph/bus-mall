'use strict';

var allCatalogItemsArray = [];
var previousItemArray = [];
var currentItemArray = [];
var randomItemArray = [randomItemOne, randomItemTwo, randomItemThree];
var itemImage = allCatalogItemsArray[Number];

var itemDescriptions = [];
var totalClicks = 0;
var MAX_CLICKS = 30;

var randomItemOne = -1;
var randomItemTwo = -1;
var randomItemThree = -1;

var catalogImageReference = document.getElementById('catalog-item');
var catalogImageReferenceTwo = document.getElementById('catalog-item2');
var catalogImageReferenceThree = document.getElementById('catalog-item3');

function CatalogItem(picturePath, description) {
    this.picturePath = picturePath;
    this.description = description;
    this.timesClicked = 0;

    allCatalogItemsArray.push(this);
    itemDescriptions.push(description)

    this.registerClick = function () {
        this.timesClicked++;
    }
}

function storeUserChoices() {
    var stringifiedCatalogItems = JSON.stringify(itemDescriptions);
    localStorage.setItem('item', stringifiedCatalogItems)
}

function getRandomItem() {
    var randomNumber = Math.floor(Math.random() * allCatalogItemsArray.length);
    return randomNumber;
}

function renderCatalogChoices(event) {
    if (event.target.id === 'imageContainer') {
        alert('please choose an image')
    }
        generateRandomItems();
        for (var i = 0; i < allCatalogItemsArray.length; i++) {
            if (event.target.alt == allCatalogItemsArray[i].description) {
                allCatalogItemsArray[i].registerClick();
            }
        }
        totalClicks++;

        if (totalClicks === MAX_CLICKS) {
            imageContainer.removeEventListener('click', renderCatalogChoices);
            storeUserChoices();
            renderChart();
        }
    }

var newRandomNumber;

function generateRandomItems() {
    while (currentItemArray.length < randomItemArray.length) {
        for (var i = 0; i < randomItemArray.length; i++) {
            randomItemArray[i] = getRandomItem();
            itemImage = allCatalogItemsArray[randomItemArray[i]];

            if (randomItemArray[i] === randomItemArray[0]) {
                catalogImageReference.src = itemImage.picturePath;
                catalogImageReference.alt = itemImage.description;

            } else if (randomItemArray[i] === randomItemArray[1]) {
                catalogImageReferenceTwo.src = itemImage.picturePath;
                catalogImageReferenceTwo.alt = itemImage.description;

            } else if (randomItemArray[i] === randomItemArray[2]) {
                catalogImageReferenceThree.src = itemImage.picturePath;
                catalogImageReferenceThree.alt = itemImage.description;
            }
            if (previousItemArray.includes(randomItemArray)) {
                console.log('Same item as before')
                continue;
            } else {
                currentItemArray.push(randomItemArray[i]);
                previousItemArray.push(randomItemArray[i]);
                console.log(`current item set: ${catalogImageReference.alt}, ${catalogImageReferenceTwo.alt}, ${catalogImageReferenceThree.alt}`)
            }
        }
    }
    currentItemArray.length = [];
}

function renderChart() {
    var canvasReference = document.getElementById("results-chart");
    var totalVotes = [];
    for (var i = 0; i < allCatalogItemsArray.length; i++) {
        totalVotes.push(allCatalogItemsArray[i].timesClicked);
    }

    new Chart(canvasReference, {
        type: 'bar',
        data: {
            labels: itemDescriptions,  // label for each individual bar
            datasets: [{
                label: 'Votes Per Item',
                data: totalVotes, // an array of the number of votes per item
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

renderCatalogChoices();
generateRandomItems();
var catalogImageReference = document.getElementById('catalog-item');
catalogImageReference.addEventListener('click', renderCatalogChoices);

var catalogImageReferenceTwo = document.getElementById('catalog-item2');
catalogImageReferenceTwo.addEventListener('click', renderCatalogChoices);

var catalogImageReferenceThree = document.getElementById('catalog-item3');
catalogImageReferenceThree.addEventListener('click', renderCatalogChoices);

var imageContainer = document.getElementById('imageContainer');
imageContainer.addEventListener('click', renderCatalogChoices)