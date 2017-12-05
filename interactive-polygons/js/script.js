
//  -----------------------------------
// Irving Angulo

let mouseX = mouseY = 1;
let TWO_PI = Math.PI * 2;

let canvas, ctx, w, h;

var circleAmount = 10;

// var constDeg = Math.PI / 180;//radians * 180 / PI = degrees
let constDeg = 0.01745329251994;
let myCircles = [];

let spcng = 100;    //spacing between shapes
let scaleR = 300;   // scales radius

//  -----------------------------------
window.onload = function init() {
	canvas = document.querySelector("canvas");
	w = window.innerWidth;
	h = window.innerHeight;
	canvas.width = w;
	canvas.height = h;

	ctx = canvas.getContext("2d");

	ctx.font = "10px serif";// the font used to draw 

	addListeners();

	generateCoordinates();

	// setInterval(draw, 16);
	requestAnimationFrame(draw);
}

//  -----------------------------------
function generateCoordinates() {
	//for each x coordinate draw a set of y coordinates

	myCircles = [];// clear first, in case resizeC is called by listener

	for (var x = spcng, i = 0; x <= canvas.width - spcng; x += spcng, i++) {
		myCircles.push([]);

		for (var y = spcng, j = 0; y <= canvas.height - spcng; y += spcng, j++) {
			myCircles[i][j] = new FragmentedCircle();

		}
	}
}

//  -----------------------------------
function draw() {

	// adjust the ammount of segments per circle
	// var segments = mouseX / 10;//scale 0..10


	var segments = (mouseX / canvas.width) * 20;//scale (0..1 * 50) = 0..50
	var spacing = TWO_PI / segments;//
	// var radius = 90;         // radius of radius
	var radius = scaleR * mouseY / canvas.height;         // size of radius

	// ctx.save();
	//clear the screen, calculations for rotation and translation
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// ctx.clearRect(-(canvas.width / 2), -(canvas.height / 2), canvas.width, canvas.height);

	ctx.strokeStyle = "#0055ff";//color 
	drawAllShapes(segments, spacing, radius);

	// ctx.restore();
	requestAnimationFrame(draw);
}

//  -----------------------------------
function drawAllShapes(segments, spacing, radius) {

	for (let x = spcng, i = 0; x <= canvas.width - spcng; x += spcng, i++) {
		for (let y = spcng, j = 0; y <= canvas.height - spcng; y += spcng, j++) {

			myCircles[i][j].update(segments, spacing, radius, x, y);
			myCircles[i][j].draw(ctx);
		}
	}
}

//  -----------------------------------

/*
Interactive:
-Color
-Background color
-Spacing
-size / in draw
*/