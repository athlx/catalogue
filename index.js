var slide = document.getElementById('slide');
var arrowNext = document.getElementById('next');
var arrowPrev = document.getElementById('prev');

arrowNext.onclick = function() {
  slide(1);
}
arrowNext.onclick = function() {
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
  slide.src = images[imgIndex += d];
  // TODO: disable arrows when first or last image displayed
}

