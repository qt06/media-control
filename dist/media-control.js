(function () {
	'use strict';

	function getMedia() {
	return document.querySelector('audio, video');
	}
	function setMediaVolume(op) {
	let c = getMedia();
	if(c == null) { return false; }
	if(op == '+') {
	c.volume = Math.min(c.volume + 0.05, 1);
	} else {
	c.volume = Math.max(c.volume - 0.05, 0);
	}
	}
	function setMediaCurrentTime(op) {
	let c = getMedia();
	if(c == null) { return false; }
	if(op == '+') {
	c.currentTime += 5;
	} else {
	c.currentTime -= 5;
	}
	}
	function toggleMediaPlay() {
	let c = getMedia();
	if(c == null) { return false; }
	if(c.paused) {
	c.play();
	} else {
	c.pause();
	}
	}
	let c = getMedia();
	if(c != null) {
	document.addEventListener('keydown', function(e) {
	let keyCode = e.keyCode;
	let shiftKey = e.shiftKey;
	if(keyCode == 32 || keyCode == 27) {
	e.preventDefault();
	toggleMediaPlay();
	}
	if(shiftKey && keyCode == 38) {
	e.preventDefault();
	setMediaVolume('+');
	}
	if(shiftKey && keyCode == 40) {
	e.preventDefault();
	setMediaVolume('-');
	}
	if(shiftKey && keyCode == 37) {
	e.preventDefault();
	setMediaCurrentTime('-');
	}
	if(shiftKey && keyCode == 39) {
	e.preventDefault();
	setMediaCurrentTime('+');
	}

	}, null);
	}

}());
//# sourceMappingURL=media-control.js.map
