var video = document.getElementsByClassName("video").item(0);

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	console.log("autoplay false");
	video.loop = false;
	console.log("looping off");
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = (document.querySelector("#slider").value + "%");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= .1 * video.playbackRate;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += .111111111111 * video.playbackRate;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime < 10) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	console.log(video.playbackRate);
});

document.querySelector("#slider").addEventListener("mouseup", function() {
	document.querySelector("#volume").innerHTML = (document.querySelector("#slider").value + "%");
	video.volume = document.querySelector("#slider").value / 100;
});

document.querySelector("#vintage").addEventListener("click", function() {
	var my_class = video.classList;
	my_class.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	var my_class = video.classList;
	my_class.remove("oldSchool");
});