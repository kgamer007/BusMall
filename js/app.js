'use strict';
console.log('js is linked');

AllImages.all = [];




var userChoosesButton1 = document.getElementById('user-choice-1');
var userChoosesButton2 = document.getElementById('user-choice-2');
var userChoosesButton3 = document.getElementById('user-choice-3');

var firstPicture = document.getElementById('firstImage');
var secondPicture = document.getElementById('secondImage');
var thirdPicture = document.getElementById('thirdImage');

function AllImages(url, name) {
  this.url = url;
  this.name = name;
  this.votes = 0;
  AllImages.all.push(this);
}
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

function randomImages() {
  var index1 = Math.floor(Math.random() * AllImages.all.length);
  var index2 = Math.floor(Math.random() * AllImages.all.length);
  var index3 = Math.floor(Math.random() * AllImages.all.length);

  var randomImage1 = AllImages.all[index1];
  var randomImage2 = AllImages.all[index2];
  var randomImage3 = AllImages.all[index3];

  firstPicture.src = randomImage1.url;
  secondPicture.src = randomImage2.url;
  thirdPicture.src = randomImage3.url;
}
randomImages();
//confused but basically we hard code the index and randomize them later
var randomImage1 = AllImages.all[0];
var randomImage2 = AllImages.all[1];
var randomImage3 = AllImages.all[2];


userChoosesButton1.addEventListener('click', function (e) {
  randomImage1.votes++;
  randomImages();
});

userChoosesButton2.addEventListener('click', function (e) {
  randomImage2.votes++;
  randomImages();
});

userChoosesButton3.addEventListener('click', function (e) {
  randomImage3.votes++;
  randomImages();
  // console.log(userChoosesButton1);
});


//*************attempt at randomization***********ignoreplz***


var productLeft = document.getElementById('firstImage');
var productCenter = document.getElementById('secondImage');
var productRight = document.getElementById('thirdImage');

function randomNumber() {
  var number = Math.floor(Math.random() * AllImages.all.length);
  return number;
}

var randomNumLeft, randomNumCenter, randomNumRight;

function randomImage(){

  randomNumLeft = randomNumber();
  randomNumCenter = randomNumber();
  randomNumRight = randomNumber();

  while (randomNumLeft === randomNumCenter){
    randomNumLeft = randomNumber();
  }
  while (randomNumLeft === randomNumRight || randomNumCenter === randomNumRight){
    randomNumRight = randomNumber();
  }
  productLeft.src = AllImages.all[randomNumLeft].filePath;
  productCenter.src = AllImages.all[randomNumCenter].filePath;
  productRight.src = AllImages.all[randomNumRight].filePath;
  AllImages.all[randomNumLeft].numOfTimesDisplayed++;
  AllImages.all[randomNumCenter].numOfTimesDisplayed++;
  AllImages.all[randomNumRight].numOfTimesDisplayed++;
  console.log(randomNumLeft, randomNumCenter, randomNumRight);
}

var clicks = 0;
function handleProductClick (){
  clicks++;
  if (clicks <= 25){
    AllImages.all[randomNumLeft].numOfClicks++;
    AllImages.all[randomNumCenter].numOfClicks++;
    AllImages.all[randomNumRight].numOfClicks++;
    randomImage();
    // console.log(clicks);
  } else {
    productLeft.removeEventListener('click', handleProductClick);
    productCenter.removeEventListener('click', handleProductClick);
    productRight.removeEventListener('click', handleProductClick);
    var resultsBox = document.getElementById('testResults');
    var resultsList = document.createElement('ul');
    for (var i =0; i < AllImages.all.length; i++){
      var productResult = document.createElement('li');
      var result = AllImages.all[i];
      productResult.textContent = result.numOfClicks + ' vote(s) for the ' + result.productName;
      resultsList.appendChild(productResult);
    }
    resultsBox.appendChild(resultsList);
    resultsBox.style.display = 'block';
    var productsBox = document.getElementById('productsBox');
    productsBox.style.display = 'none';
    var instructions = document.getElementById('instructions');
    instructions.style.display = 'none';
  }
}

productLeft.addEventListener('click', handleProductClick);
productCenter.addEventListener('click', handleProductClick);
productRight.addEventListener('click', handleProductClick);

AllImages();







