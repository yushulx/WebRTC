// create videos
var videos = document.getElementById('videos');
var localVideo = document.createElement("video");
localVideo.setAttribute('autoplay', true);
localVideo.setAttribute('id', 'localVideo');
videos.appendChild(localVideo);

var remoteVideo = document.createElement("video");
remoteVideo.setAttribute('autoplay', true);
remoteVideo.setAttribute('id', 'remoteVideo');
videos.appendChild(remoteVideo); 

// initialize buttons
var captureButton = document.getElementById('capture');
captureButton.onclick = captureImage;
var saveButton = document.getElementById('save');
saveButton.onclick = saveImage;

// canvas size
var width = 320, height = 240;

function captureImage() {
	if (remoteVideo.src == "") {
		alert('No remote connection');
		return;
	}
		
	//dump("Capturing len " + snapshots.length + "\n");
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = remoteVideo.videoWidth / 4;
	canvas.height = remoteVideo.videoHeight / 4;
	// canvas.width = width;
	// canvas.height = height;
	ctx.drawImage(remoteVideo, 0, 0, canvas.width, canvas.height);
}

function saveImage() {
	if (remoteVideo.src == "") {
		alert('No remote connection');
		return;
	}
		
	var ua = window.navigator.userAgent;

	if (ua.indexOf("Chrome") > 0) {
		// save image without file type
		var canvas = document.getElementById("canvas");

		// save image as png
		var link = document.createElement('a');
		link.download = "test.png";
		link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
		;
		link.click();
	} else {
		alert("Please use Chrome");
	}
}