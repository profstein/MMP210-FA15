function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,600);
    cnv.parent("windows");
    
    //draw a window by calling the drawWindow function
    drawWindow(50,50);
    
    drawWindow(200,50);
    
    
    drawWindow(350,50);
}

function drawWindow(startX, startY){
    fill('peru');
    rect(startX, startY,100,250);
}