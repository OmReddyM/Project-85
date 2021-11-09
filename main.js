//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "parkingLot.jpg";
//Set initials for a car image.
greencar_image = "car2.png";
greenCarHgt = 130;
greenCarWdt = 100;
greenCarX = 50;
greenCarY = 175;
function add() {
	//upload car, and background images on the canvas.
	backgroundImgTag = new Image();
	backgroundImgTag.onload = uploadBckgrnd();
	backgroundImgTag.src = background_image;

	greenCarImgTag = new Image();
	greenCarImgTag.onload = uploadgreencar;
	greenCarImgTag.src = greencar_image;
}
function uploadBckgrnd() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}
function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greenCarImgTag, greenCarX, greenCarY, greenCarWdt, greenCarHgt);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}
function up() {
	if (greenCarY > 0) {
		greenCarY -= 10;
		console.log("When up arrow is pressed, X = " + greenCarX + " and Y = " + greenCarY);
		uploadBckgrnd();
		uploadgreencar();
	}
}
function down() {
	if (greenCarY < 320) {
		greenCarY += 10;
		console.log("When down arrow is pressed, X = " + greenCarX + " and Y = " + greenCarY);
		uploadBckgrnd();
		uploadgreencar();
	}
}
function left() {
	if (greenCarX > 0) {
		greenCarX -= 10;
		console.log("When left arrow is pressed, X = " + (greenCarX + 10) + " and Y = " + greenCarY);
		uploadBckgrnd();
		uploadgreencar();
	}
}
function right() {
	if (greenCarX < 800) {
		greenCarX += 10;
		console.log("When right arrow is pressed, X = " + greenCarX + " and Y = " + greenCarY);
		uploadBckgrnd();
		uploadgreencar();
	}
}
