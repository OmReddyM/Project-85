//Create a reference for canvas 
cnv = document.getElementById("myCanvas");
ctx = cnv.getContext("2d");
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greenCarHgt = 40;
greenCarWdt = 40;
//Set initial position for a car image.
greenCarX = 10;
greenCarY = 100;
carNum = 1;
function add() {
	//upload car, and background images on the canvas.
	backgroundImgTag = new Image();
	backgroundImgTag.onload = uploadBckgrnd();
	backgroundImgTag.src = background_image;

	greenCarImgTag = new Image();
	greenCarImgTag.onload = uploadgreencar;
	greenCarImgTag.src = greencar_image;

	carNum++;
}
function deleteCar() {
	
}
function uploadBckgrnd() {
	//Define function ‘uploadBackground’

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
		add();
	}
}
function down() {
	if (greenCarY < 110) {
		greenCarY += 10;
		console.log("When down arrow is pressed, X = " + greenCarX + " and Y = " + greenCarY);
		add();
	}
}
function left() {
	if (greenCarX > 0) {
		greenCarX -= 10;
		console.log("When left arrow is pressed, X = " + greenCarX + " and Y = " + greenCarY);
		add();
	}
}
function right() {
	if (greenCarX < 260) {
		greenCarX += 10;
		console.log("When left arrow is pressed, X = " + greenCarX + " and Y = " + greenCarY);
		add();
	}
}
