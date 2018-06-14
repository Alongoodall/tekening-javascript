function setup() {
	createCanvas(400, 300); 
}

function draw() {
	document.body.style.backgroundColor = "#821717"; 
	ellipseMode(CENTER);
	rectMode(CENTER);
	background(255);
	
	fill(150, 0, 150);
	rect(240, 150, 45, 95);
	
	fill(255, 0, 0);
	ellipse(240, 115, 60, 60);
	
	fill(0, 0, 255);
	ellipse(223, 115, 20, 22);
	ellipse(257, 115, 20, 22);
	
	line(230, 195, 220, 235);
	line(250, 195, 260, 235);
	
	
}