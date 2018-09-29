 function setup()
{
 	createCanvas(windowWidth, windowHeight);
    background(220, 220, 160);
	strokeWeight(8)
	stroke(0);
}


function touchMoved()
{
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}


function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
  background(220, 220, 160);
}