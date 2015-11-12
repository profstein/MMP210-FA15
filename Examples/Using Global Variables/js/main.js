//GLOBAL VARIABLES

//SETUP CODE (runs once at the start)
function setup() {

    createCanvas(displayWidth, displayHeight);
    
    //starting coordinates for the circles
    var x = 25;
    var y = 25;
    //use  loop to create the circles in a grid format
    for(var i=0; i<1000; i++){
        //set color for fill and stroke
        fill('lightblue');
        stroke('darkblue');
        
        //draw the circle
        ellipse(x,y,50,50);
        
        //add to x to make next circle to the right
        x += 60; //10 more than width to give space
        
        //check if we've gone off the end
        if(x > width){
            //we did so move y down to next row
            y+= 60;
            //and move x back to start value
            x = 25;
        }
    }//end for
    
}//end setup()

