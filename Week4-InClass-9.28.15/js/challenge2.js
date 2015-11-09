function setup(){
// createCanvas(720,480);
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    
    if(mouseX > (windowWidth/2) ){
        fill(200);
        ellipse(mouseX, mouseY, 50, 50);
    }else{
        fill(100);
        rect(mouseX, mouseY, 50, 50);
    }
}