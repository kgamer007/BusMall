'use stirct';

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

  var randomImage = AllImages.all[index1];
  var randomImage2 = AllImages.all[index2];
  var randomImage3 = AllImages.all[index3];

firstPicture.src = randomImage.url;
secondPicture.src = randomImage2.url;
thirdPicture.src = randomImage3.url;

}
randomImages();




// userChoosesButton1.addEventListener('click', function (e) {
//   image1.votes++;
//   image1 = AllImages[Math.floor(Math.random() * theListOfJPG.length)];
//   firstPicture.src = image1.url;
//   image2 = AllImages[Math.floor(Math.random() * theListOfJPG.length)];
//   secondPicture.src = image2.url;
// });

// userChoosesButton2.addEventListener('click', function (e) {
//   image2.votes++;
//   image2 = AllImages[Math.floor(Math.random() * theListOfJPG.length)];
//   secondPicture.src = image2.url;
// });

// userChoosesButton3.addEventListener('click', function (e) {
//   image3.votes++;
//   image3 = AllImages[Math.floor(Math.random() * theListOfJPG.length)];
//   thirdPicture.src = image3.url;
// });
