'use strict';
console.log('js is linked');

AllImages.all = [];

var clicks = 0;

var firstPicture = document.getElementById('firstImage');
var secondPicture = document.getElementById('secondImage');
var thirdPicture = document.getElementById('thirdImage');

firstPicture.setAttribute('class', 'bag');
secondPicture.setAttribute('class', 'banana');
thirdPicture.setAttribute('class', 'bathroom');

function AllImages(url, name) {
  this.url = url;
  this.name = name;
  this.votes = 0;
  this.numOfTimesDisplayed = 0;
  AllImages.all.push(this);
}

// when something happens, do this:

new AllImages('img/bag.jpg', 'bag');
new AllImages('img/banana.jpg', 'banana');
new AllImages('img/bathroom.jpg', 'bathroom');
new AllImages('img/boots.jpg', 'boots');
new AllImages('img/breakfast.jpg', 'breakfast');
new AllImages('img/bubblegum.jpg', 'bubblegum');
new AllImages('img/chair.jpg', 'chair');
new AllImages('img/cthulhu.jpg', 'cthulhu');
new AllImages('img/dog-duck.jpg', 'dog-duck');
new AllImages('img/dragon.jpg', 'dragon');
new AllImages('img/pen.jpg', 'pen');
new AllImages('img/pet-sweep.jpg', 'pet-sweep');
new AllImages('img/scissors.jpg', 'scissors');
new AllImages('img/shark.jpg', 'shark');
new AllImages('img/sweep.png', 'sweep');
new AllImages('img/tauntaun.jpg', 'tauntaun');
new AllImages('img/unicorn.jpg', 'unicorn');
new AllImages('img/usb.gif', 'usb');
new AllImages('img/water-can.jpg', 'water-can');
new AllImages('img/wine-glass.jpg', 'wine-glass');

function putNewSetOfImagesOnPage() {
  clicks++;
  var index1 = Math.floor(Math.random() * AllImages.all.length);
  var index2 = Math.floor(Math.random() * AllImages.all.length);
  var index3 = Math.floor(Math.random() * AllImages.all.length);

  var randomImage1 = AllImages.all[index1];
  var randomImage2 = AllImages.all[index2];
  var randomImage3 = AllImages.all[index3];

  randomImage1.numOfTimesDisplayed++;
  randomImage2.numOfTimesDisplayed++;
  randomImage3.numOfTimesDisplayed++;


  firstPicture.setAttribute('class', randomImage1.name);
  secondPicture.setAttribute('class', randomImage2.name);
  thirdPicture.setAttribute('class', randomImage3.name);
  firstPicture.src = randomImage1.url;
  secondPicture.src = randomImage2.url;
  thirdPicture.src = randomImage3.url;
}

putNewSetOfImagesOnPage();

function clickHandler1(e) {
  var clickedImageProductName = firstPicture.getAttribute('class');
  console.log(clickedImageProductName); // ex. "dragon"

  // do some work here to find relevant AllImages.all array entry, and increment votes for it
  for (var i = 0; i < AllImages.all.length; i++) {
    var productAtIndexI = AllImages.all[i]; // { votes: 1, name: "bag", etc.}
    if(productAtIndexI.name === clickedImageProductName) {
      productAtIndexI.votes++;
    }
  }
  checkIfDone();
}

function clickHandler2(e) {
  var clickedImage2ProductName = secondPicture.getAttribute('class');
  console.log(clickedImage2ProductName);

  for (var i = 0; i < AllImages.all.length; i++) {
    var productAtIndexI = AllImages.all[i]; // { votes: 1, name: "bag", etc.}
    if(productAtIndexI.name === clickedImage2ProductName) {
      productAtIndexI.votes++;
    }
  }
  checkIfDone();
}

function clickHandler3(e) {
  var clickedImage3ProductName = thirdPicture.getAttribute('class');
  console.log(clickedImage3ProductName);
  for (var i = 0; i < AllImages.all.length; i++) {
    var productAtIndexI = AllImages.all[i]; // { votes: 1, name: "bag", etc.}
    if(productAtIndexI.name === clickedImage3ProductName) {
      productAtIndexI.votes++;
    }
  }

  checkIfDone();
}


firstPicture.addEventListener('click', clickHandler1);

secondPicture.addEventListener('click', clickHandler2);

thirdPicture.addEventListener('click', clickHandler3);

function checkIfDone() {
  if (clicks <= 25) {
    putNewSetOfImagesOnPage();
  } else {
    var resultsBox = document.getElementById('testResults');
    var resultsList = document.createElement('ul');
    for (var i = 0; i < AllImages.all.length; i++) {
      var productResult = document.createElement('li');
      var result = AllImages.all[i];
      productResult.textContent = result.votes + ' vote(s) for the ' + result.name;
      resultsList.appendChild(productResult);
    }
    resultsBox.appendChild(resultsList);
    resultsBox.style.display = 'block';
    var productsBox = document.getElementById('products-area');
    productsBox.style.display = 'none';
    var instructions = document.getElementById('instructions');
    instructions.style.display = 'none';
  }

}
//checkIfDone();
