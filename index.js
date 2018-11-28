window.onload = function() {
var slider = document.getElementById('slider');
var imageNum = document.getElementById('num');
var arrowNext = document.getElementById('next');
var arrowPrev = document.getElementById('prev');

arrowNext.onclick = function() {
  slide(1);
}
arrowPrev.onclick = function() {
  slide(-1);
}

var images = [
  "#",
  "#",
  "#",
  "#"
];
var imgIndex = 0;
var slide = function(d) {
  imgTotal = images.length;
  imgIndex += d;
  slider.src = images[imgIndex];
  altText = 'Image ' + (imgIndex+1) + ' of ' + imgTotal;
  slider.alt = altText;
  imageNum.innerHTML = altText;
}

}
