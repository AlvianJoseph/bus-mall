
'use strict';

var allCatalogItemsArray = [];
var itemDescriptions = [];

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

function getRandomItem() {
    var randomNumber = Math.floor(Math.random() * allCatalogItemsArray.length);
    return randomNumber;
}

var totalClicks = 0;
var MAX_CLICKS = 30;

var previousItemArray = [-1, -2, -3];
var currentItemArray = [];

function renderCatalogItem(event) {
    if (event) {
        for (var i = 0; i < allCatalogItemsArray.length; i++) {
            if (event.target.alt == allCatalogItemsArray[i].description) {
                allCatalogItemsArray[i].registerClick();
            }
        }
        totalClicks++;

        if (totalClicks === MAX_CLICKS) {
            renderChart();
        }
    }

    var randomItem = -1;
    var randomItem2 = -1;
    var randomItem3 = -1;
    var itemImage = allCatalogItemsArray[randomItem];
    var catalogImageReference = document.getElementById('catalog-item');
    var catalogImageReference2 = document.getElementById('catalog-item2');
    var catalogImageReference3 = document.getElementById('catalog-item3');

    while (currentItemArray.length < 1) {
        randomItem = getRandomItem();
        itemImage = allCatalogItemsArray[randomItem];
        catalogImageReference.src = itemImage.picturePath;
        catalogImageReference.alt = itemImage.description;
        if (!previousItemArray.includes(randomItem)) {
            currentItemArray.push(randomItem);
            previousItemArray = currentItemArray;
            console.log(`current item: ${currentItemArray[0]}, ${catalogImageReference.alt}`)
        } else {
            console.log('Same item as before')
            continue;
        }
    }

    while (currentItemArray.length < 2) {
        randomItem2 = getRandomItem();
        itemImage = allCatalogItemsArray[randomItem2];
        catalogImageReference2.src = itemImage.picturePath;
        catalogImageReference2.alt = itemImage.description;
        if (!previousItemArray.includes(randomItem2)) {
            currentItemArray.push(randomItem2);
            previousItemArray = currentItemArray;
            console.log(`current item: ${currentItemArray[1]}, ${catalogImageReference2.alt}`)
        } else {
            console.log('Same item as before')
            continue;
        }
    }

    while (currentItemArray.length < 3) {
        randomItem3 = getRandomItem();
        itemImage = allCatalogItemsArray[randomItem3];
        catalogImageReference3.src = itemImage.picturePath;
        catalogImageReference3.alt = itemImage.description;
        if (!previousItemArray.includes(randomItem3)) {
            currentItemArray.push(randomItem3);
            previousItemArray = currentItemArray;
            console.log(`current item: ${currentItemArray[2]}, ${catalogImageReference3.alt}`)
        } else {
            console.log('Same item as before')
            continue;
        }
    }
    currentItemArray.length = 0;
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

renderCatalogItem();
var catalogImageReference = document.getElementById('catalog-item');
catalogImageReference.addEventListener('click', renderCatalogItem);

var catalogImageReference2 = document.getElementById('catalog-item2');
catalogImageReference2.addEventListener('click', renderCatalogItem);

var catalogImageReference3 = document.getElementById('catalog-item3');
catalogImageReference3.addEventListener('click', renderCatalogItem);
