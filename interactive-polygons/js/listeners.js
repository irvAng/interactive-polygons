function addListeners() {
	canvas.addEventListener('mousemove', getMouse, false);

	let myWindow = window.addEventListener('resize', resizeC);

}

//  -----------------------------------
function getMouse(mousePosition) {

	if (mousePosition.layerX || mousePosition.layerX === 0) {
		mouseX = mousePosition.layerX;
		mouseY = mousePosition.layerY;
	} else if (mousePosition.offsetX || mousePosition.offsetX === 0) {
		mouseX = mousePosition.offsetX;
		mouseY = mousePosition.offsetY;
	}
}

//  -----------------------------------
function resizeC(evt) {

	w = evt.target.innerWidth;
	h = evt.target.innerHeight;

	canvas.width = w;
	canvas.height = h;

	generateCoordinates();
}