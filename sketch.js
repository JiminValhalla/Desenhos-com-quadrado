function setup() {
  createCanvas(800, 800);
  background(204, 153, 255);
}


function draw() {
  stroke(204, 255, 153);
  fill(204, 255, 153);

  // console.log (mouseIsPressed);
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 5, 5);
  }
}
