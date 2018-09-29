 function setup()
{
 	createCanvas(displayWidth, displayHeight);
  background(220, 220, 160);
	strokeWeight(10)
	stroke(0);
}


function touchMoved()
{
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}


function windowResized()
{
  
  var physicalScreenWidth = window.screen.width * window.devicePixelRatio;
  var physicalScreenHeight = window.screen.height * window.devicePixelRatio;
  
  resizeCanvas(physicalScreenWidth, physicalScreenHeight);
  background(220, 220, 160);
}