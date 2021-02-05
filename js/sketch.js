var itr = 0;
var scaler = 0;

var canvas;

function setup(){
	canvas = createCanvas(800, 500);
	canvas.style('z-index', '-1'); // canvasを後ろに移動する
	background(0);
}

function draw(){
	translate(width/2, height/2);
	background(0);
	// FileList(0);
	// drawFermatSpiral(17.0/55);
	// itr++;
}

// function drawFermatSpiral(float rotate){
// 	var theta = 2 * PI * itr* rotate;
// 	PVector v = PVector.fromAngle(theta);
// 	v.mult(scaler * SVGPathSegCurvetoQuadraticAbs(itr));
// 	ellipse(v.x, v.y, scaler, scaler);
// }