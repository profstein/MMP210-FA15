
//GLOBAL VARIABLES
//locations of red, green blue circles
var redX, redY, greenX, greenY, blueX, blueY;

//Hues of reg, green, blue
var redHue, greenHue, blueHue;

//Saturation and Brightness, same for each
var saturation, brightness;

//the width and height of the circles
var cSize; 

//width and height of the canvas
var canvasW, canvasH;

//hue value of line to draw
var lineColor; 

//SETUP CODE (runs once at the start)
function setup() {
  canvasW = displayWidth;
  canvasH = displayHeight;
  createCanvas(canvasW, canvasH);
  //run the start screen function
  startScreen();
  
}

function startScreen(){
  
  //set size of circle buttons
  cSize = 50;
  
  //shared color varibles 
  saturation = 75;
  brightness = 60;
  
  //RedCircle
  redX = 30;
  redY = 75;
  redHue = 360;
  drawCircle(redX, redY, cSize, cSize, redHue, saturation, brightness);
  
  //green circle
  greenX = 30;
  greenY = 175;
  greenHue = 115;
  drawCircle(greenX, greenY, cSize, cSize, greenHue, saturation, brightness);
  
  //blue circle
  blueX = 30;
  blueY = 275;
  blueHue = 231;
  drawCircle(blueX, blueY, cSize, cSize, blueHue, saturation, brightness);
}

//P5.js DRAW FUNCTION (Runs repeatedly based on frame rate)
function draw() {
  if(mouseIsPressed){
     colorMode(HSB, 360,100,100);  // Use HSB with PS style value range
    stroke(lineColor, saturation,brightness);
  line(pmouseX,pmouseY,mouseX,mouseY);
  }
}

function drawCircle(locX, locY, cWidth, cHeight, h, s, b ){
  //set color for stroke and fill
  colorMode(HSB, 360,100,100);  // Use HSB with PS style value range
 cS = color(h, s, b-25);  // stroke is darker
 cF = color(h,s,b);
  // Draw a circle
  strokeWeight(2);
  stroke(cS);
  fill(cF);
  ellipse(locX, locY, cWidth, cHeight);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the red circle
  var d = dist(mouseX, mouseY, redX, redY);
  if (d < cSize) {
    //change line color
    lineColor = redHue;
  }
  
  d = dist(mouseX, mouseY, greenX, greenY);
  if (d < cSize) {
    lineColor = greenHue;
  }
  
  d = dist(mouseX, mouseY,blueX,blueY);
  if (d < cSize) {
    lineColor = blueHue;
  }
}
