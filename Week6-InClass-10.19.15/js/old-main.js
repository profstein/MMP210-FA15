
function setup() {

    createCanvas(windowWidth, windowHeight);

    var x = 0;
    var y = 0;
    var gridWidth = width - 100;
    for (var i = 0; i < 100; i++) {
        console.log(i);
        drawWindow(x, y);
        //increment our X
        x += 120; //same as x = x + 120;
        //check if x is past the grid width
        if (x > gridWidth) {
            //set x back to the beginning
            x = 0;
            //move y down
            y += 270;
        }//end if
    }//end for loop

}//end setup

function draw() {


}

function drawWindow(startX, startY) {
    fill('peru');
    var winWidth = 100;
    var winHeight = 250;
    rect(startX, startY, winWidth, winHeight);

    //window lines
    line(startX + winWidth/2, startY, startX + winWidth/2, startY + winHeight);

    line(startX, startY *.333, startX + winWidth, startY * .333);

    line(startX, startY *.666, startX + winWidth, startY * .666);

}

















