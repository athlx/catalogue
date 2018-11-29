window.onload = function() {
	var slider = document.getElementById('slider');
	var imageNum = document.getElementById('num');
	var imageDesc = document.getElementById('desc');
	var arrowNext = document.getElementById('next');
	var arrowPrev = document.getElementById('prev');
	
	arrowNext.onclick = function() {
		slide(1);
	}
	arrowPrev.onclick = function() {
  		slide(-1);
	}
	
	var imgIndex = 0;
	var slide = function(d) {
		imgTotal = images.length;
		imgIndex += d;
		img = images[imgIndex];
		slider.src = img.url;
		altText = 'Image ' + (imgIndex+1) + ' of ' + imgTotal;
		slider.alt = img.desc;
		imageNum.innerHTML = altText;
		imageDesc.innerHTML = img.desc;
	}
}
