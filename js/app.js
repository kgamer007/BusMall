'use strict';
console.log('js is linked');

AllImages.all = [];

var userChoosesButton1 = document.getElementById('user-choice-1');
var userChoosesButton2 = document.getElementById('user-choice-2');
var userChoosesButton3 = document.getElementById('user-choice-3');

var firstPicture = document.getElementById('firstImage');
var secondPicture = document.getElementById('secondImage');
var thirdPicture = document.getElementById('thirdImage');

var showUserResults = document.getElementById('total-results');
var userNumberOfVotes = 0;
var previousResults = 0;
var currentResults = 0;

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
function pickNewImages() {
  randomImage1 = AllImages[Math.floor(Math.random() * AllImages.length)];
  firstPicture.src = randomImage1.url;
  if(userNumberOfVotes === 0){
    randomImage1 = AllImages.all[Math.floor(Math.random() * AllImages.length)];
    
  }

  randomImage2 = AllImages[Math.floor(Math.random() * AllImages.length)];
  secondPicture.src = randomImage2.url;

  randomImage3 = AllImages[Math.floor(Math.random() * AllImages.length)];
  thirdPicture.src = randomImage3.url;
}