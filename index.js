window.onload = function() {
var slider = document.getElementById('slider');
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
  imgIndex += d;
  slider.src = images[imgIndex];
}

}
