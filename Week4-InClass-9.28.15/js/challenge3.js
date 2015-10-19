


function abeLincoln(locX, locY, sizeW, sizeH, fillColor){
    noStroke();
    fill(fillColor);
    ellipse(locX, locY, sizeW, sizeH);
}

function setup(){
// createCanvas(720,480);
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    //call the function
    var randomX = random(windowWidth);
    var randomY = random(windowHeight);
    var randomSize = random(50);
    var myColor = color(225,120, 17);
    abeLincoln(randomX, randomY, randomSize, randomSize, myColor );
    
    myColor = color(200,0,0); 
    myColor = color(random(255), random(255), random(255));
    randomX = random(windowWidth);
    randomY = random(windowHeight);
    abeLincoln(randomX, randomY, randomSize, randomSize, myColor );
    
    
    myColor = color(0,0,170);
    randomX = random(windowWidth);
    randomY = random(windowHeight);
    abeLincoln(randomX, randomY, randomSize, randomSize, myColor );
    
    myColor = color(12,200,17);
    abeLincoln(mouseX, mouseY, 50,75, myColor);
}





