var canvas;

let noiseScale=0.02;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
	background(0);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	canvas.style('z-index', '-1'); // canvasを後ろに移動する
	background(0);
}

function draw() {
	for (let j = 0; j<5; j++){
		for (let i =0; i < 5; i++){
			let n = noise(noiseScale) * width;
	//	translate(width/2,height/2);
			let x =  width/20  + i * width / 20; 
			let y = height/20  + j*height / 80;
			let r = 2;
		

		//	rotateX(frameCount/500);
			rotateY(frameCount /100);
			ellipse(x, y, r,r);
			noStroke();
		fill(random(255), (15-i) *255/15, (15-i) *255/15);
		}
	}

}