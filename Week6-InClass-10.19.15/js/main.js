
//global variables
var myWinWidth, myWinHeight; //size of the main part of the window

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");

    //set the width and height of the window i will draw
    myWinHeight = 250;
    myWinWidth = 100;

    var colWidth = 160; //distance between windows going across. should be bigger then myWinWidth
    var rowHeight = 290; //distance btween windows going down. should be bigger than myWinHeight

    //these variables are used to keep track of where we will be adding each window in the for loop
    var x = 0;
    var y = 0;

    for(var i=0; i<100; i++){
        drawWindow(x,y);
        x += colWidth;

        if(x > width-myWinWidth){
            x = 0;
            y += rowHeight;
        }
    }//end for loop
}//end setup

function drawWindow(startX, startY){
    // fill color
    fill('peru');
    //line color
    stroke('black');

    //main window
    rect(startX, startY,myWinWidth,myWinHeight);

    //position variables for adding window details
    var x1,x2,y1,y2;

    //vertical line down the middle
    x1 = startX+myWinWidth/2; //horizontal middle of window
    y1 = startY; //top of window
    x2 = startX+myWinWidth/2; //horizontal middle of window
    y2 = startY + myWinHeight; // bottom of window
    line(x1,y1,x2,y2 );

    //horizontal line 1/3 (.333) of the way down
    x1 = startX; // left side
    y1 = startY+myWinHeight*.333; // 1/3 of the way down
    x2 = startX+myWinWidth; //right side of window
    y2 = y1; //top of window
    line(x1,y1,x2,y2 );

    //horizontal line 2/3 (.666) of the way down
    x1 = startX; //left side of window
    y1 = startY+myWinHeight*.666; // 2/3 of the way down
    x2 = startX+myWinWidth; //right side of window
    y2 = y1; // 2/3 of the way down
    line(x1,y1,x2,y2 );

    //add box at the bottom
    x1 = startX - 20;
    y1 = startY + myWinHeight;
    rect(x1,y1,myWinWidth+40, 20);


}//end drawWindow
