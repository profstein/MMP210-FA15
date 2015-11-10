// Global Variables
    var body;
    var face;
    
    var invertedbody;
    var invertedface;
var lineColor;

var b1X = 50;
  var b1Y = 30;
var buttonSize = 30;

// Create Canvas

function setup(){
    // Create Canvas
    
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("farm");
    //drawBunny();
  //set the colors
  body = color(251, 187, 185);
    face = color(111, 78, 55);
    invertedbody = color(0, 0, 0);
    invertedface = color(228, 27, 23);
  lineColor = red;
    drawBunnies();
  
  //make buttons
  ellipse(b1X,b1Y,buttonSize,buttonSize);
}


function mousePressed(){
  //dist between mouse and b1
  var d = dist(mouseX,mouseY,b1X,b1Y);
  if(d<buttonSize/2){
    console.log('pressed');
  body = color(random(255),random(255),random(255));
  face = color('blue');
  }
  
  drawBunnies();
}

function drawBunnies(){
  var x = 100;
    var y = 180;
    
    for(var i=0; i<=40; i++){
        //console.log(i);
        drawBunny(x,y);
        x += 180;
        if( x > width){
            x = 100;
            y += 200;
        }
            
    }
}
// Create Functions

    function drawBunny(hopX, hopY){
    //console.log("hopX",hopX);   
    earX = hopX-30;//70;
    earY = hopY-70//50;
    circleSize = 100;
        
    earWidth = 25;
    earLength = 75;
    
    bodyX = hopX;//100;
    bodyY = hopY;//120;
    
    noseX = hopX-8;//92; //x
    noseY = hopY+25;//145; //y
    noseB = hopX;//100;// x
    noseBB = hopY+30;//150; //y
    noseD = hopX+8;//108; //x
    noseDD = hopY+25;//145; //y
        
    
    
        
    eyeX = hopX-20;
    eyeY = hopY;
    eyeSize = 10;
    
    //draw the circle
     
    fill(body);
    ellipse(earX, earY, earWidth, earLength);

    fill(body);
    ellipse(earX+60, earY, earWidth, earLength);
    
    fill(body);
    ellipse(bodyX, bodyY, circleSize, circleSize);
        
    fill(face);
    triangle(noseX, noseY, noseB, noseBB, noseD, noseDD);
    
    fill(face);
    ellipse(eyeX, eyeY, eyeSize, eyeSize);
        
    fill(face);
    ellipse(eyeX+39, eyeY, eyeSize, eyeSize);
    
       
        
    }
