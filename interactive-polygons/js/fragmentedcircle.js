//  -----------------------------------
class FragmentedCircle {
	//draws the circle
	constructor() {
		this.spacing = 0;
		this.segments = 0;
		this.radius = 0;
		this.constDeg = 0.01745329251994;// Math.PI / 180 = 0.01745329251994
		//translation
		this.x = 0;
		this.y = 0;
	}
}

//  -----------------------------------
FragmentedCircle.prototype.update = function (segments, spacing, radius, x, y) {
	this.segments = segments;
	this.spacing = spacing;
	this.radius = radius;
	this.x = x;
	this.y = y;
}

//  -----------------------------------
FragmentedCircle.prototype.draw = function (ctx) {

	ctx.beginPath();

	//  basically using polar coordinates, the 'size' is the radius
	//  do the math one time and reuse in the rest of the function
	// this.x = Math.cos(this.spacing * i);
	// this.y = Math.sin(this.spacing * i);
	for (var i = 0; i < this.segments; i++) {
		ctx.lineTo((Math.cos(this.spacing * i) * this.radius) + this.x,
			(Math.sin(this.spacing * i) * this.radius) + this.y);
	}

	// Finish the line
	//create a circle using the arc method
	ctx.lineTo((Math.cos(this.spacing * this.segments) * this.radius) + this.x,
		(Math.sin(this.spacing * this.segments) * this.radius) + this.y);
	//context.fill(); //draw the fill colour

	ctx.stroke();//draw the outline		
	ctx.closePath();
}