//global variables
var bubbles = []; //create empy circle array

//Create bubble constructor
function Bubble(startX,startY){
    this.x = startX;
    this.y = startY;
    this.r = 25; //r is for radius which is 1/2 the width
    this.color = color('purple');



    this.drawBubble = function(){
        fill(this.color);
        ellipse(this.x, this.y, this.r*2, this.r*2 );
    }

    this.moveBubble = function(){
        this.x++;
        this.y++;
    }
}//end Bubble

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("objectExamples");

//    var bubbles = []; //create empy circle array

    for(var i=0;i<10; i++){
        bubbles[i] = new Bubble(random(width), random(height));
        bubbles[i].drawBubble();
    }

}//end setup


function draw(){
    for(var i=0;i<bubbles.length; i++){
        bubbles[i].moveBubble();
        bubbles[i].drawBubble();
    }
}



