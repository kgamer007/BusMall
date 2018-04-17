'use stirct';

console.log('js is linked');

var userChoosesButton1 = document.getElementById('User-choice-1');
var userChoosesButton2 = document.getElementById('User-choice-2');
var userChoosesButton3 = document.getElementById('User-choice-3');

function randomImages(url) {
  this.url = url;
  this.votes = 0;
}

var allAnswers = [
  new randomImages('img/bag.jpg'),
  new randomImages('img/banana.jpg'),
  new randomImages('img/bathroom.jpg'),
  new randomImages('img/boots.jpg'),
  new randomImages('img/breakfast.jpg'),
  new randomImages('img/bubblegum.jpg'),
  new randomImages('img/chair.jpg'),
  new randomImages('img/cthulhu.jpg'),
  new randomImages('img/dog-punk.jpg'),
  new randomImages('img/dragon.jpg'),
  new randomImages('img/pen.jpg'),
  new randomImages('img/pet-sweep.jpg'),
  new randomImages('img/scissors.jpg'),
  new randomImages('img/shark.jpg'),
  new randomImages('img/sweep.jpg'),
  new randomImages('img/tauntaun.jpg'),
  new randomImages('img/unicorn.jpg'),
  new randomImages('img/usb.jpg'),
  new randomImages('img/water-can.jpg'),
  new randomImages('img/wine-glass.jpg')
];

var userAnswers1 = allAnswers[0];
var userAnswers2 = allAnswers[1];
var userAnswers3 = allAnswers[2];

userChoosesButton1.addEventListener('click', function(e) {
  userAnswers1.votes++;
});

userChoosesButton2.addEventListener('click', function(e) {
  userAnswers2.votes++;
});

userChoosesButton3.addEventListener('click', function(e) {
  userAnswers3.votes++;
});
