 function setup()
{
  createCanvas(displayWidth, displayHeight);
  background(220, 220, 160);
  strokeWeight(8)
  stroke(0);
}

function touchMoved()
{
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}