function setup() {
  createCanvas(windowWidth/2,windowHeight/2);
  background(200);
}

function draw() {
  rectMode(CENTER);
  rect(width/2, height/2, 50, 50);
  triangle(30, 75, 58, 20, 86, 75);
  line(mouseX, 0, mouseX, 400);
}
