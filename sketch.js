var img1;
var img2;
var img3;
var img4;
var xspeed = 10;
var xpos=0;

function preload(){
 img1 = loadImage("silly.jpg");
 img2 = loadImage("haha.jpg");
 img3 = loadImage("happyy.png");
 img4 = loadImage("Evil.png");
}
function setup() {
  createCanvas(900,500);
  noCursor();
}
function draw(){
	if(mouseIsPressed){
  imageMode(CORNER);
  image(img2,0,0);
}
  else{
    imageMode(CORNER);
    image(img1,0,0);
  }
  if (mouseIsPressed) {
    imageMode(CENTER);
   image(img4, mouseX, mouseY,80,80);
  }
 else {
   imageMode(CENTER);
    image(img3, mouseX, mouseY,60,60);   
 }
  if (mouseIsPressed){
  fill("#FF0301")
  ellipse(0, xpos, 55, 55);
  ellipse(56, xpos, 55, 55);
  ellipse(112, xpos, 55, 55);
  ellipse(168, xpos, 55, 55);
  ellipse(224, xpos, 55, 55);
  ellipse(280, xpos, 55, 55);
  ellipse(336, xpos, 55, 55);
  ellipse(392, xpos, 55, 55);
  ellipse(448, xpos, 55, 55);
  ellipse(504, xpos, 55, 55);
  ellipse(560, xpos, 55, 55);
  ellipse(616, xpos, 55, 55);
  ellipse(672, xpos, 55, 55);
  ellipse(728, xpos, 55, 55);
  ellipse(784, xpos, 55, 55);
  ellipse(840, xpos, 55, 55);
  ellipse(896, xpos, 55, 55);
   
  
  if (xpos > height){
    xspeed = -20;
  }
  if (xpos < 0){
    xspeed = 20;
  }
   xpos += xspeed;
      
}
}