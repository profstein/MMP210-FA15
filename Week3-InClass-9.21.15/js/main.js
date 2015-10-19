
function setup() {

  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  
//  noStroke();

//  fill(100);
    
  ellipse(252, 144,72, 72);
    line(100,200, 300, 400);
}

function draw(){
//    background(0);
    
//    if(mouseX === pmouseX && mouseY === pmouseY){
//        fill(0,255,0);
//    }else{
//        fill(255,0,0);
//    }
//    
//    if(mouseX != pmouseX){
//       fill(255,0,0);
//   }else if(mouseY != pmouseY){
//       fill(255,0,0);
//   }else{
//       fill(0,255,0);
//   }
//    
//    
//    if(mouseX === pmouseX){
//        fill(notMoving);
//    }else{
//        fill(moving);
//    }
//    
//    if(mouseY === pmouseY){
//        fill(notMoving);
//    }else{
//        fill(moving);
//    }
//    
//    fill(notMoving);
//    if(mouseX != pmouseX){
//        fill(moving);
//    }
//    if(mouseY != pmouseY){
//        fill(moving);
//    }
//    
//    
//    
////   if(mouseX === pmouseX){
////       fill(255,0,0);
////   }else if(mouseY === pmouseY){
////       fill(0,0,255);
////   }else{
////       fill(0,255,0);
////   }
////    
//    ellipse(mouseX, mouseY, 72,72);
    
    //background(200);
    if(mouseIsPressed){
    line(pmouseX,pmouseY, mouseX, mouseY);
    }
}





