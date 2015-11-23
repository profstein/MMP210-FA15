//GLOBAL VARIABLES
//Colors of reg, green, blue
var blueColor, greenColor;
//fill color for circles
var fillColor;
//Color value of line to draw
var lineColor;
//the width and height of the circles
var cSize;

//width and height of the canvas
var canvasW, canvasH;

//SETUP CODE (runs once at the start)
function setup() {
    canvasW = displayWidth;
    canvasH = displayHeight;
    createCanvas(canvasW, canvasH);
    //colors setup
    greenColor = color('lightgreen');
    blueColor = color('lightblue');
    fillColor = blueColor;
    //set size of circle buttons
    cSize = 50;
    //run the start screen function
    startScreen();
}

function startScreen() {

    var x = 0;
    var y = 0;
    var altRow = true;

    for (var i = 0; i < 1000; i++) {

        drawCircle(x, y, cSize, cSize, fillColor);
        
        //move x for next circle
        x+=cSize+ 10;
        
        //check to see if x is past the end
        if(x > width - cSize){
            
            //check to see if we are on alt row and adjust the starting position of x accodingly then change altRow value
            if(altRow){
                x = cSize/2+5; //start one half circle over (also add 1/2 10px gap)
                altRow = false;
                fillColor = greenColor; //change fill
            }else{
                x = 0;
                altRow = true;
                fillColor = blueColor; //change fill
            }//end if altRow
            
            //move y down
            y+= cSize + 10
            
        }//end if x is past the end
    }//end for loop

}

function drawCircle(locX, locY, cWidth, cHeight, cColor) {
    var cS = color('black');
    var cF = cColor;
    // Draw a circle
    strokeWeight(2);
    stroke(cS);
    fill(cF);
    ellipse(locX, locY, cWidth, cHeight);
}
