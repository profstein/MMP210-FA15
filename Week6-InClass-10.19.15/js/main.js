
function setup(){
    //create the canvas. Here we are putting it into a variable so we can associate it with an element.
    //When you are doing things like putting items in a grid, you may want the canvas dimensions to be specific numbers and not just windowWidth and windowHeight
    var cnv = createCanvas(800,600);
    cnv.parent("windows");
    
    //draw a window by calling the drawWindow function
    drawWindow();
}

function drawWindow(){
    fill('peru');
    rect(50,50,100,250);
}