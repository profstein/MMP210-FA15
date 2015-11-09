//global variable
var redX, redY;
var greenX, greenY;
var blueX, blueY;
var lineColor;


function drawCirlce(locX, locY, sizeW, sizeH, fillColor){
    noStroke();
    fill(fillColor);
    ellipse(locX, locY, sizeW, sizeH);
}

function setup(){

    createCanvas(windowWidth, windowHeight);
    redX = 75;
    redY = 75;
    greenX = 75;
    greenY = 175;
    blueX = 75;
    blueY = 275;
    
    drawCirlce(redX,redY,50,50, color(255,0,0) );
    

}

function mousePressed(){
    var d = dist(mouseX, mouseY, redX, redY);
  if (d < 50) {
    lineColor = color(255,0,0);
  }
}

function draw(){
    
}





